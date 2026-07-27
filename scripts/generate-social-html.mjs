import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import {
  PAGE_SEO,
  buildAbsoluteAssetUrl,
  buildCanonicalUrl,
  formatSeoTitle,
  getSiteUrl,
  injectSocialMeta,
} from "./seo-meta.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const newsPath = path.join(rootDir, "public", "data", "novedades.json");

function findHashedAsset(prefix) {
  const assetsDir = path.join(distDir, "assets");
  if (!fs.existsSync(assetsDir)) return null;

  const match = fs
    .readdirSync(assetsDir)
    .find((file) => file.startsWith(prefix));

  return match ? `/assets/${match}` : null;
}

function writeRouteHtml(relativeDir, meta) {
  const templatePath = path.join(distDir, "index.html");
  const template = fs.readFileSync(templatePath, "utf8");
  const outputDir = path.join(distDir, relativeDir);
  const html = injectSocialMeta(template, meta);

  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(path.join(outputDir, "index.html"), html, "utf8");
}

function main() {
  if (!fs.existsSync(distDir)) {
    console.error("No existe dist/. Ejecutá vite build primero.");
    process.exit(1);
  }

  const siteUrl = getSiteUrl();
  const news = JSON.parse(fs.readFileSync(newsPath, "utf8"));
  const defaultImage = buildAbsoluteAssetUrl(
    findHashedAsset("portada-noticias") || "/favicon.svg",
    siteUrl
  );

  const homeMeta = {
    title: formatSeoTitle(PAGE_SEO.home.title),
    description: PAGE_SEO.home.description,
    url: buildCanonicalUrl(PAGE_SEO.home.path),
    image: defaultImage,
    type: PAGE_SEO.home.type,
  };

  const newsMeta = {
    title: formatSeoTitle(PAGE_SEO.news.title),
    description: PAGE_SEO.news.description,
    url: buildCanonicalUrl(PAGE_SEO.news.path),
    image: defaultImage,
    type: PAGE_SEO.news.type,
  };

  fs.writeFileSync(
    path.join(distDir, "index.html"),
    injectSocialMeta(fs.readFileSync(path.join(distDir, "index.html"), "utf8"), homeMeta),
    "utf8"
  );

  writeRouteHtml("noticias", newsMeta);

  news.forEach((item) => {
    writeRouteHtml(`noticias/${item.id}`, {
      title: formatSeoTitle(item.title),
      description: item.description,
      url: buildCanonicalUrl(`/noticias/${item.id}`),
      image: buildAbsoluteAssetUrl(item.image, siteUrl),
      type: "article",
    });
  });

  console.log(`Meta social generada para ${news.length + 2} rutas (${siteUrl}).`);
}

main();
