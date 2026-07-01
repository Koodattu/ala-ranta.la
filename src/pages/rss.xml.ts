import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import { getBlogPostHref, getPreferredBlogPost, groupBlogPostTranslations } from "../blog";
import { profile } from "../data/profile";

export async function GET(context: APIContext) {
  const posts = groupBlogPostTranslations(await getCollection("blog", ({ data }) => !data.draft))
    .map((translations) => getPreferredBlogPost(translations, "en"))
    .filter((post): post is NonNullable<typeof post> => Boolean(post));

  return rss({
    title: `${profile.siteName} Blog`,
    description: "Longer-form writing by Juha Ala-Rantala about software projects, product decisions, and lessons learned while building.",
    site: context.site ?? "https://ala-ranta.la",
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: getBlogPostHref(post),
      categories: post.data.tags,
    })),
    customData: "<language>en</language>",
  });
}
