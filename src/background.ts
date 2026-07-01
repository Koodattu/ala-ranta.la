import type { CollectionEntry } from "astro:content";

export type BackgroundKind = "work" | "education";
export type BackgroundLocale = "en" | "fi";
export type BackgroundEntry = CollectionEntry<"background">;
export type BackgroundTranslations = Partial<Record<BackgroundLocale, BackgroundEntry>>;

export const backgroundLocales: BackgroundLocale[] = ["en", "fi"];

export const getBackgroundEntryLanguage = (entry: BackgroundEntry): BackgroundLocale => entry.data.lang;

export const getBackgroundEntrySlug = (entry: BackgroundEntry) =>
  entry.data.routeSlug ?? entry.id.replace(/\.(en|fi)$/, "");

export const getBackgroundEntryHref = (entry: BackgroundEntry) =>
  `/${entry.data.kind}/${getBackgroundEntrySlug(entry)}/`;

export const getBackgroundEntryKey = (entry: BackgroundEntry) =>
  entry.data.translationKey ?? `${entry.data.kind}:${getBackgroundEntrySlug(entry)}`;

export const getPreferredBackgroundEntry = (translations: BackgroundTranslations, locale: BackgroundLocale = "en") =>
  translations[locale] ?? translations.en ?? translations.fi;

export const groupBackgroundTranslations = (entries: BackgroundEntry[]) => {
  const groups = new Map<string, BackgroundTranslations>();

  for (const entry of entries) {
    const key = getBackgroundEntryKey(entry);
    const locale = getBackgroundEntryLanguage(entry);
    const translations = groups.get(key) ?? {};

    translations[locale] = entry;
    groups.set(key, translations);
  }

  return Array.from(groups.values()).sort((a, b) => {
    const entryA = getPreferredBackgroundEntry(a);
    const entryB = getPreferredBackgroundEntry(b);

    return (entryA?.data.organization ?? "").localeCompare(entryB?.data.organization ?? "");
  });
};
