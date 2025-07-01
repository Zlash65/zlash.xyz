import { Project } from "./types";

export const hoverLabels: Record<Project["mediaType"], string> = {
  video: "watch video",
  gif: "view gif",
  image: "view image",
  website: "view live",
  code: "view code",
  blog: "read blog",
};

export const getYouTubeId = (url: string): string => {
  const match = url.match(/(?:youtube\.com.*[\?&]v=|youtu\.be\/)([\w-]{11})/);
  return match ? match[1] : "";
};

export const getThumbnail = (p: Project): string => {
  if (p.thumbnail) return p.thumbnail;

  if (p.mediaType === "video" && p.mediaFormat === "youtube") {
    const id = getYouTubeId(p.link);
    return id ? `https://img.youtube.com/vi/${id}/mqdefault.jpg` : "";
  }

  return "/assets/images/placeholder.png";
};
