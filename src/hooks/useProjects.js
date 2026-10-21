import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { fallbackProjects } from "../data/projects";

export function useProjects() {
  const [projects, setProjects] = useState(supabase ? [] : fallbackProjects);

  useEffect(() => {
    if (!supabase) return;
    let active = true;

    supabase
      .from("projects")
      .select("*")
      .eq("published", true)
      .order("position", { ascending: true })
      .then(({ data, error }) => {
        if (!active) return;
        setProjects(error || !data ? fallbackProjects : data);
      });

    return () => {
      active = false;
    };
  }, []);

  return projects;
}

export function localizeProject(project, language) {
  const isEnglish = language?.startsWith("en");
  return {
    id: project.id,
    imagen: project.image_url,
    title: (isEnglish && project.title_en) || project.title_es,
    text: (isEnglish && project.text_en) || project.text_es,
    link: project.link || undefined,
    design: project.design || undefined,
  };
}
