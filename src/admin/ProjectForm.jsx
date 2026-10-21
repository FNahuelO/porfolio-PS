import { useEffect, useState } from "react";
import { ImagePlus, X } from "lucide-react";
import { supabase } from "../lib/supabase";
import { removeProjectImage, uploadProjectImage } from "./images";
import spainFlag from "../assets/spain.svg";
import ukFlag from "../assets/gb.svg";
import {
  ErrorMessage,
  Field,
  GlassCard,
  SectionTitle,
  inputClass,
  primaryButtonClass,
  secondaryButtonClass,
} from "./ui";

const emptyProject = {
  title_es: "",
  title_en: "",
  text_es: "",
  text_en: "",
  link: "",
  design: "",
  image_url: "",
  published: true,
};

export default function ProjectForm({ project, nextPosition, onClose, onSaved }) {
  const isNew = !project.id;
  const [values, setValues] = useState(() => {
    const initial = { ...emptyProject };
    for (const key of Object.keys(emptyProject)) {
      initial[key] = project[key] ?? emptyProject[key];
    }
    return initial;
  });
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(project.image_url || "");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  const setField = (field) => (event) => {
    const value =
      event.target.type === "checkbox" ? event.target.checked : event.target.value;
    setValues((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSaving(true);
    setError("");

    try {
      let imageUrl = values.image_url;
      if (file) imageUrl = await uploadProjectImage(file);

      const payload = {
        ...values,
        title_es: values.title_es.trim(),
        title_en: values.title_en.trim(),
        link: values.link.trim() || null,
        design: values.design.trim() || null,
        image_url: imageUrl || null,
      };

      const { error } = isNew
        ? await supabase
            .from("projects")
            .insert({ ...payload, position: nextPosition })
        : await supabase.from("projects").update(payload).eq("id", project.id);

      if (error) {
        if (file) await removeProjectImage(imageUrl);
        throw error;
      }

      if (file && project.image_url) await removeProjectImage(project.image_url);
      onSaved();
    } catch (err) {
      setError(err.message || "No se pudo guardar el trabajo.");
      setSaving(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-[#0B0A0F66] backdrop-blur-[4px] p-6 font-['Josefin_Sans'] text-[#4A4A4A]"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <GlassCard solid className="w-full max-w-[90rem] my-10">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8 px-10 py-10 max-md:px-6">
          <div className="flex items-center justify-between gap-4">
            <SectionTitle>{isNew ? "Nuevo trabajo" : "Editar trabajo"}</SectionTitle>
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar"
              className="w-[4rem] h-[4rem] p-0 flex items-center justify-center rounded-full bg-white text-[#4A4A4A] border-none shadow-[0px_4px_4px_0px_#00000026] hover:bg-[#5165D3] hover:text-white focus:outline-none"
            >
              <X size={20} />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
            <LanguageColumn flag={spainFlag} language="Español">
              <Field label="Título *">
                <input required value={values.title_es} onChange={setField("title_es")} className={inputClass} />
              </Field>
              <Field label="Descripción">
                <textarea rows={6} value={values.text_es} onChange={setField("text_es")} className={`${inputClass} resize-y`} />
              </Field>
            </LanguageColumn>

            <LanguageColumn flag={ukFlag} language="English">
              <Field label="Title">
                <input value={values.title_en} onChange={setField("title_en")} className={inputClass} />
              </Field>
              <Field label="Description">
                <textarea rows={6} value={values.text_en} onChange={setField("text_en")} className={`${inputClass} resize-y`} />
              </Field>
            </LanguageColumn>
          </div>

          <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
            <Field label="Link al sitio">
              <input type="url" placeholder="https://..." value={values.link} onChange={setField("link")} className={inputClass} />
            </Field>
            <Field label="Link al diseño (Figma)">
              <input type="url" placeholder="https://www.figma.com/..." value={values.design} onChange={setField("design")} className={inputClass} />
            </Field>
          </div>

          <Field label="Imagen">
            <label className="relative flex items-center justify-center gap-6 min-h-[16rem] rounded-2xl border-2 border-dashed border-[#FB980F80] bg-[#FFFFFF82] cursor-pointer overflow-hidden transition-colors hover:border-[#FB980F] hover:bg-[#FFF7EE] max-md:flex-col max-md:p-6">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(event) => setFile(event.target.files?.[0] ?? null)}
              />
              {preview && (
                <img src={preview} alt="" className="h-[14rem] w-auto max-w-[50%] object-cover rounded-xl shadow-[0_2px_10px_rgb(0_0_0/12%)] max-md:max-w-full" />
              )}
              <span className="flex flex-col items-center gap-2 text-[1.4rem] font-normal text-[#8D8D8D] text-center">
                <ImagePlus size={28} className="text-[#FB980F]" />
                {preview ? "Click para cambiar la imagen" : "Click para subir una imagen"}
              </span>
            </label>
          </Field>

          <label className="flex items-center gap-4 text-[1.5rem] cursor-pointer w-fit">
            <input
              type="checkbox"
              className="peer sr-only"
              checked={values.published}
              onChange={setField("published")}
            />
            <span className="relative w-[4.4rem] h-[2.4rem] rounded-full bg-[#D5D5D5] transition-colors peer-checked:bg-[#43ADB9] after:absolute after:content-[''] after:top-[0.3rem] after:left-[0.3rem] after:w-[1.8rem] after:h-[1.8rem] after:rounded-full after:bg-white after:transition-transform peer-checked:after:translate-x-[2rem]" />
            Publicado (visible en el portfolio)
          </label>

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <div className="flex justify-end gap-4 max-md:flex-col-reverse">
            <button type="button" onClick={onClose} className={secondaryButtonClass}>
              Cancelar
            </button>
            <button type="submit" disabled={saving} className={primaryButtonClass}>
              {saving ? "Guardando..." : "Guardar"}
            </button>
          </div>
        </form>
      </GlassCard>
    </div>
  );
}

function LanguageColumn({ flag, language, children }) {
  return (
    <fieldset className="m-0 p-0 border-none flex flex-col gap-5 min-w-0">
      <legend className="flex items-center gap-3 mb-4 text-[1.6rem] font-bold text-[#4A4A4A]">
        <img src={flag} alt="" className="w-[2.4rem] h-[1.6rem] object-cover rounded-[0.3rem]" />
        {language}
      </legend>
      {children}
    </fieldset>
  );
}
