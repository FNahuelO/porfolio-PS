import { useCallback, useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  LogOut,
  Pencil,
  Plus,
  Trash2,
} from "lucide-react";
import { supabase } from "../lib/supabase";
import ProjectForm from "./ProjectForm";
import { removeProjectImage } from "./images";
import {
  AdminBackground,
  AdminLogo,
  ErrorMessage,
  SectionTitle,
  primaryButtonClass,
  secondaryButtonClass,
} from "./ui";

export default function Dashboard({ user }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editing, setEditing] = useState(null);

  const loadProjects = useCallback(async () => {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("position", { ascending: true });

    if (error) setError(error.message);
    else setProjects(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadProjects();
  }, [loadProjects]);

  const run = async (action) => {
    setError("");
    const { error } = await action();
    if (error) setError(error.message);
    await loadProjects();
  };

  const togglePublished = (project) =>
    run(() =>
      supabase
        .from("projects")
        .update({ published: !project.published })
        .eq("id", project.id)
    );

  const move = (index, direction) => {
    const current = projects[index];
    const target = projects[index + direction];
    if (!target) return;

    run(async () => {
      const results = await Promise.all([
        supabase
          .from("projects")
          .update({ position: target.position })
          .eq("id", current.id),
        supabase
          .from("projects")
          .update({ position: current.position })
          .eq("id", target.id),
      ]);
      return results.find((result) => result.error) ?? { error: null };
    });
  };

  const remove = (project) => {
    if (!window.confirm(`¿Eliminar "${project.title_es}"?`)) return;

    run(async () => {
      const result = await supabase
        .from("projects")
        .delete()
        .eq("id", project.id);
      if (!result.error) await removeProjectImage(project.image_url);
      return result;
    });
  };

  const handleSaved = async () => {
    setEditing(null);
    await loadProjects();
  };

  const nextPosition =
    projects.reduce((max, project) => Math.max(max, project.position), -1) + 1;
  const publishedCount = projects.filter((project) => project.published).length;

  return (
    <AdminBackground>
      <header className="sticky top-0 z-30 bg-[#FFFFFFB8] backdrop-blur-[20px]">
        <div className="max-w-[120rem] mx-auto px-10 py-5 flex items-center justify-between gap-6 max-md:px-5">
          <div className="flex items-center gap-4">
            <AdminLogo />
            <div className="flex flex-col">
              <span className="text-[1.8rem] font-bold text-[#0B0A0F]">
                Panel admin
              </span>
              <span className="text-[1.3rem] text-[#8D8D8D]">{user.email}</span>
            </div>
          </div>
          <div className="flex items-center gap-8 max-md:gap-4">
            <a
              href="/"
              className="text-hover text-[1.6rem] font-semibold text-[#4A4A4A] hover:text-[#4A4A4A] max-md:hidden"
            >
              Ver sitio
            </a>
            <button
              onClick={() => supabase.auth.signOut()}
              className={secondaryButtonClass}
            >
              <LogOut size={18} /> Salir
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[120rem] mx-auto px-10 py-12 flex flex-col gap-10 max-md:px-5">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div className="flex flex-col gap-2">
            <SectionTitle>Trabajos</SectionTitle>
            <span className="text-[1.5rem] text-[#666768]">
              {projects.length} en total · {publishedCount} publicados
            </span>
          </div>
          <button
            onClick={() => setEditing({})}
            className={primaryButtonClass}
          >
            <Plus size={20} /> Nuevo trabajo
          </button>
        </div>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        {loading ? (
          <p className="text-center text-[1.6rem] py-20">Cargando...</p>
        ) : projects.length === 0 ? (
          <div className="flex flex-col items-center gap-6 py-20 text-center">
            <p className="m-0 text-[1.8rem] text-[#666768]">
              Todavía no hay trabajos cargados.
            </p>
            <button
              onClick={() => setEditing({})}
              className={primaryButtonClass}
            >
              <Plus size={20} /> Cargar el primero
            </button>
          </div>
        ) : (
          <ul className="list-none m-0 p-0 grid grid-cols-3 gap-10 max-xl:grid-cols-2 max-md:grid-cols-1">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                isFirst={index === 0}
                isLast={index === projects.length - 1}
                onMove={(direction) => move(index, direction)}
                onToggle={() => togglePublished(project)}
                onEdit={() => setEditing(project)}
                onRemove={() => remove(project)}
              />
            ))}
          </ul>
        )}
      </main>

      {editing && (
        <ProjectForm
          project={editing}
          nextPosition={nextPosition}
          onClose={() => setEditing(null)}
          onSaved={handleSaved}
        />
      )}
    </AdminBackground>
  );
}

function ProjectCard({ project, isFirst, isLast, onMove, onToggle, onEdit, onRemove }) {
  return (
    <li
      className={`flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-[0_2px_10px_rgb(0_0_0/8%)] transition-all hover:shadow-[0_20px_25px_rgb(0_0_0/15%)] hover:scale-[1.01] ${
        project.published ? "" : "opacity-60"
      }`}
    >
      <div className="relative aspect-[16/10] shrink-0 overflow-hidden bg-[#F2F5F7]">
        {project.image_url ? (
          <img
            src={project.image_url}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-[1.4rem] text-[#8D8D8D]">
            Sin imagen
          </div>
        )}
        <span
          className={`absolute top-4 left-4 px-4 py-1 rounded-[3rem] text-[1.2rem] font-bold text-white ${
            project.published ? "bg-[#43ADB9]" : "bg-[#FB980F]"
          }`}
        >
          {project.published ? "Publicado" : "Oculto"}
        </span>
      </div>

      <div className="flex flex-col gap-1 px-6 pt-5 pb-3 flex-1">
        <span className="text-[1.7rem] font-bold text-[#4A4A4A] leading-snug">
          {project.title_es}
        </span>
        <span className="text-[1.4rem] text-[#78778A]">
          {project.title_en || "Sin título en inglés"}
        </span>
      </div>

      <div className="flex items-center justify-between gap-2 px-6 pb-6 pt-2">
        <div className="flex gap-2">
          <RoundButton label="Mover antes" disabled={isFirst} onClick={() => onMove(-1)}>
            <ArrowLeft size={18} />
          </RoundButton>
          <RoundButton label="Mover después" disabled={isLast} onClick={() => onMove(1)}>
            <ArrowRight size={18} />
          </RoundButton>
        </div>
        <div className="flex gap-2">
          <RoundButton
            label={project.published ? "Ocultar" : "Publicar"}
            onClick={onToggle}
          >
            {project.published ? <Eye size={18} /> : <EyeOff size={18} />}
          </RoundButton>
          <RoundButton label="Editar" onClick={onEdit}>
            <Pencil size={18} />
          </RoundButton>
          <RoundButton label="Eliminar" danger onClick={onRemove}>
            <Trash2 size={18} />
          </RoundButton>
        </div>
      </div>
    </li>
  );
}

function RoundButton({ label, danger, children, ...props }) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      className={`w-[4rem] h-[4rem] p-0 flex items-center justify-center rounded-full bg-white text-[#5EA3C0] border-none shadow-[0px_4px_4px_0px_#C7DAF278_inset,0px_4px_4px_0px_#00000026] transition-colors focus:outline-none disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#5EA3C0] ${
        danger ? "hover:bg-[#E5484D] hover:text-white" : "hover:bg-[#5165D3] hover:text-white"
      }`}
      {...props}
    >
      {children}
    </button>
  );
}
