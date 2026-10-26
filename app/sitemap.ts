import type { MetadataRoute } from "next";

const BASE_URL = "https://adiomubarakadebukola.netlify.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
