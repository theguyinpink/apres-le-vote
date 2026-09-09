import type { MetadataRoute } from "next";
import { parties } from "@/lib/parties";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://apreslevote.maisonclm.fr";

  const partyPages = parties.map((party) => ({
    url: `${baseUrl}/partis/${party.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...partyPages,
  ];
}