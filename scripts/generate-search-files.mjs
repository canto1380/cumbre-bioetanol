import "dotenv/config";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { buildCanonicalUrl, getSiteUrl } from "./seo-meta.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const newsPath = path.join(rootDir, "public", "data", "novedades.json");

const MONTHS = {
  enero: "01",
  febrero: "02",
  marzo: "03",
  abril: "04",
  mayo: "05",
  junio: "06",
  julio: "07",
  agosto: "08",
  septiembre: "09",
  octubre: "10",
  noviembre: "11",
  diciembre: "12",
};

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function parseSpanishDate(date) {
  const match = String(date || "")
    .trim()
    .match(/^(\d{1,2})\s+de\s+([A-Za-zÁÉÍÓÚáéíóúÑñ]+),?\s+(\d{4})$/);

  if (!match) return null;

  const [, day, monthName, year] = match;
  const month = MONTHS[monthName.toLowerCase()];
  if (!month) return null;

  return `${year}-${month}-${day.padStart(2, "0")}`;
}

function buildUrlEntry({ path: urlPath, lastmod }) {
  const lastmodTag = lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : "";

  return `  <url>
    <loc>${escapeXml(buildCanonicalUrl(urlPath))}</loc>${lastmodTag}
  </url>`;
}

function main() {
  if (!fs.existsSync(distDir)) {
    console.error("No existe dist/. Ejecutá vite build primero.");
    process.exit(1);
  }

  const siteUrl = getSiteUrl();
  const news = JSON.parse(fs.readFileSync(newsPath, "utf8"));
  const urls = [
    { path: "/" },
    { path: "/noticias" },
    ...news.map((item) => ({
      path: `/noticias/${item.slug}`,
      lastmod: parseSpanishDate(item.date),
    })),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(buildUrlEntry).join("\n")}
</urlset>
`;

  const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

  fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemap, "utf8");
  fs.writeFileSync(path.join(distDir, "robots.txt"), robots, "utf8");

  console.log(
    `SEO buscadores: robots.txt + sitemap.xml (${urls.length} URLs, ${siteUrl}).`
  );
}

main();
