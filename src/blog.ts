import type { CollectionEntry } from "astro:content";

export type BlogLocale = "en" | "fi";
export type BlogPost = CollectionEntry<"blog">;
export type BlogPostTranslations = Partial<Record<BlogLocale, BlogPost>>;

export const blogLocales: BlogLocale[] = ["en", "fi"];

export const getBlogPostLanguage = (post: BlogPost): BlogLocale => post.data.lang;

export const getBlogPostSlug = (post: BlogPost) => post.data.slug ?? post.id.replace(/\.(en|fi)$/, "");

export const getBlogPostHref = (post: BlogPost) => `/blog/${getBlogPostSlug(post)}/`;

export const getBlogPostKey = (post: BlogPost) => post.data.translationKey ?? getBlogPostSlug(post);

export const getPreferredBlogPost = (translations: BlogPostTranslations, locale: BlogLocale = "en") =>
  translations[locale] ?? translations.en ?? translations.fi;

export const getBlogPostHrefForLocale = (translations: BlogPostTranslations, locale: BlogLocale) => {
  const post = getPreferredBlogPost(translations, locale);

  return post ? getBlogPostHref(post) : "/blog/";
};

export const groupBlogPostTranslations = (posts: BlogPost[]) => {
  const groups = new Map<string, BlogPostTranslations>();

  for (const post of posts) {
    const key = getBlogPostKey(post);
    const locale = getBlogPostLanguage(post);
    const translations = groups.get(key) ?? {};

    translations[locale] = post;
    groups.set(key, translations);
  }

  return Array.from(groups.values()).sort((a, b) => {
    const postA = getPreferredBlogPost(a);
    const postB = getPreferredBlogPost(b);

    return (postB?.data.pubDate.valueOf() ?? 0) - (postA?.data.pubDate.valueOf() ?? 0);
  });
};
