export type ProjectTech = Record<string, string[]>;

export type Project = {
  title: string;
  description: string;
  tech: ProjectTech;
  features: string[];
  link: string;
  year: number;
};

export const slugify = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const getProjectSlug = (project: Project) => slugify(project.title);

export const getProjectTags = (project: Project) =>
  Object.values(project.tech)
    .flat()
    .filter(Boolean);

export const assetPath = (path: string) => encodeURI(path).replaceAll("'", "%27");

export const getUniqueTags = (projects: Project[]) =>
  Array.from(new Set(projects.flatMap(getProjectTags))).sort((a, b) => a.localeCompare(b));

export const projectImagePath = (project: Project) =>
  assetPath(`/images/${project.title.toLowerCase().replaceAll(" ", "-")}.webp`);

export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);

export const sortNewestProjects = (projects: Project[]) =>
  [...projects].sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));
