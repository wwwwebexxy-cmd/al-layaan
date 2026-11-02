import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      // Explicitly allowing Answer Engines and AI Bots for AEO
      {
        userAgent: [
          "GPTBot", 
          "ChatGPT-User", 
          "Google-Extended", 
          "Anthropic-ai", 
          "PerplexityBot",
          "ClaudeBot"
        ],
        allow: "/",
      }
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
