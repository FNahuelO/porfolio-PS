import { PROJECTS_BUCKET, supabase } from "../lib/supabase";

const publicPrefix = `/storage/v1/object/public/${PROJECTS_BUCKET}/`;

export async function uploadProjectImage(file) {
  const extension = file.name.split(".").pop()?.toLowerCase() || "png";
  const path = `${crypto.randomUUID()}.${extension}`;

  const { error } = await supabase.storage
    .from(PROJECTS_BUCKET)
    .upload(path, file, { contentType: file.type });
  if (error) throw error;

  return supabase.storage.from(PROJECTS_BUCKET).getPublicUrl(path).data
    .publicUrl;
}

// Las imágenes migradas viven en /public y no se pueden borrar desde acá.
export async function removeProjectImage(url) {
  if (!url?.includes(publicPrefix)) return;
  const path = url.split(publicPrefix)[1];
  await supabase.storage.from(PROJECTS_BUCKET).remove([path]);
}
