export type Project = {
  slug?: string;
  title: string;
  description: string;
  descriptionFi?: string;
  features: string[];
  featuresFi?: string[];
  source: string;
  blog?: string;
  demo?: string;
  image?: string;
  year: number;
};

export type BackgroundItem = {
  organization: string;
  role: string;
  period: string;
  logo: string;
  url: string;
  summary: string;
  details: string[];
  tags: string[];
};

export type BackgroundDetailKind = "work" | "education";

export const slugify = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const getProjectSlug = (project: Project) => project.slug ?? slugify(project.title);

export const getBackgroundSlug = (item: Pick<BackgroundItem, "organization">) => slugify(item.organization);

export const getBackgroundDetailHref = (kind: BackgroundDetailKind, item: Pick<BackgroundItem, "organization">) =>
  `/${kind}/${getBackgroundSlug(item)}/`;

export const assetPath = (path: string) => encodeURI(path).replaceAll("'", "%27");

export const projectImagePath = (project: Project) =>
  assetPath(project.image ?? `/images/${project.title.toLowerCase().replaceAll(" ", "-")}.webp`);

export const formatDateForLocale = (date: Date, locale: "en" | "fi" = "en") =>
  new Intl.DateTimeFormat(locale === "fi" ? "fi-FI" : "en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);

export const formatDate = (date: Date) => formatDateForLocale(date, "en");

export const sortNewestProjects = (projects: Project[]) =>
  projects
    .map((project, index) => ({ project, index }))
    .sort((a, b) => b.project.year - a.project.year || a.index - b.index)
    .map(({ project }) => project);
