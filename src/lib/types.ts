export type MediaType = "video" | "gif" | "image" | "website" | "code" | "blog";
export type MediaFormat = "local" | "remote" | "youtube" | string;

export interface Project {
  title: string;
  categories: string[];
  description: string;
  mediaType: MediaType;
  mediaFormat: MediaFormat;
  link: string;
  thumbnail?: string;
  github?: string;
  source?: string;
  tags?: string[];
}
