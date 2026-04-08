import type { MetadataRoute } from "next";

const BASE = "https://pacefast.app";

const blogSlugs = [
  "what-is-protein-pacing",
  "intermittent-fasting-visceral-fat",
  "if-p-muscle-retention",
  "anti-inflammatory-fasting",
  "gut-microbiome-fasting",
  "reduced-hunger-protein-pacing",
  "vo2-max-intermittent-fasting",
  "insulin-sensitivity-if-p",
  "lipid-profile-if-p",
  "metabolic-rate-fasting",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
