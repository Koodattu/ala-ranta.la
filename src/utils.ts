export type Project = {
  slug?: string;
  title: string;
  description: string;
  descriptionFi?: string;
  features: string[];
  source: string;
  blog?: string;
  demo?: string;
  image?: string;
  year: number;
};

export const slugify = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const getProjectSlug = (project: Project) => project.slug ?? slugify(project.title);

export const assetPath = (path: string) => encodeURI(path).replaceAll("'", "%27");

export const projectImagePath = (project: Project) =>
  assetPath(project.image ?? `/images/${project.title.toLowerCase().replaceAll(" ", "-")}.webp`);

export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);

export const sortNewestProjects = (projects: Project[]) =>
  projects
    .map((project, index) => ({ project, index }))
    .sort((a, b) => b.project.year - a.project.year || a.index - b.index)
    .map(({ project }) => project);
