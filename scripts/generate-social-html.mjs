import "dotenv/config";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import {
  PAGE_SEO,
  buildAbsoluteAssetUrl,
  buildCanonicalUrl,
  escapeHtml,
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

function buildNewsListBody(newsItems, description) {
  const items = newsItems
    .map(
      (item) => `      <li>
        <a href="/noticias/${item.slug}">${escapeHtml(item.title)}</a>
        <p>${escapeHtml(item.description)}</p>
      </li>`
    )
    .join("\n");

  return `
    <main>
      <h1>Todas las noticias</h1>
      <p>${escapeHtml(description)}</p>
      <ul>
${items}
      </ul>
    </main>
  `;
}

function buildArticleBody(item) {
  const paragraphs = (item.content || [])
    .map((p) => `      <p>${escapeHtml(p)}</p>`)
    .join("\n");

  return `
    <main>
      <article>
        <p><a href="/noticias">Noticias</a></p>
        <h1>${escapeHtml(item.title)}</h1>
        <p><time>${escapeHtml(item.date || "")}</time></p>
        <p>${escapeHtml(item.description)}</p>
${paragraphs}
      </article>
    </main>
  `;
}

/** Escribe HTML plano (noticias.html). Evita index.html en carpetas (301 Pretty URLs). */
function writeFlatHtml(relativePathWithoutExt, meta) {
  const templatePath = path.join(distDir, "index.html");
  const template = fs.readFileSync(templatePath, "utf8");
  const outputPath = path.join(distDir, `${relativePathWithoutExt}.html`);
  const html = injectSocialMeta(template, meta);

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, html, "utf8");
}

function removeDirIndexHtml(relativeDir) {
  const indexPath = path.join(distDir, relativeDir, "index.html");
  if (fs.existsSync(indexPath)) {
    fs.unlinkSync(indexPath);
  }
}

function main() {
  if (!fs.existsSync(distDir)) {
    console.error("No existe dist/. Ejecutá vite build primero.");
    process.exit(1);
  }

  const siteUrl = getSiteUrl();
  const news = JSON.parse(fs.readFileSync(newsPath, "utf8"));
  const defaultImage = buildAbsoluteAssetUrl(
    findHashedAsset("portada-noticias") || "/favicon-192.png",
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
    bodyHtml: buildNewsListBody(news, PAGE_SEO.news.description),
  };

  fs.writeFileSync(
    path.join(distDir, "index.html"),
    injectSocialMeta(fs.readFileSync(path.join(distDir, "index.html"), "utf8"), homeMeta),
    "utf8"
  );

  writeFlatHtml("noticias", newsMeta);
  removeDirIndexHtml("noticias");

  news.forEach((item) => {
    writeFlatHtml(`noticias/${item.slug}`, {
      title: formatSeoTitle(item.title),
      description: item.description,
      url: buildCanonicalUrl(`/noticias/${item.slug}`),
      image: buildAbsoluteAssetUrl(item.image, siteUrl),
      type: "article",
      bodyHtml: buildArticleBody(item),
    });
    removeDirIndexHtml(`noticias/${item.slug}`);
  });

  console.log(
    `Meta social + HTML semántico generado (${news.length + 2} rutas planas, ${siteUrl}).`
  );
}

main();
