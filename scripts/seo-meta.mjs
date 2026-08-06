export const SITE = {
  name: "2° Cumbre de Bioetanol",
  defaultTitle: "2° Cumbre de Bioetanol",
  titleTemplate: "%s | 2° Cumbre de Bioetanol",
  defaultDescription:
    "II Cumbre de Bioetanol: encuentro nacional sobre bioetanol, políticas energéticas, innovación industrial e inscripción al evento en Tucumán, Argentina.",
  organization: "IPAAT",
};

export const PAGE_SEO = {
  home: {
    title: "2° Cumbre de Bioetanol",
    description:
      "Inscribite a la II Cumbre de Bioetanol. Conocé el cronograma, novedades del sector y participá del encuentro en Tucumán el 21 de agosto de 2026.",
    path: "/",
    type: "website",
  },
  news: {
    title: "Noticias",
    description:
      "Novedades, anuncios y actualidad sobre la II Cumbre de Bioetanol y la industria del bioetanol en Argentina.",
    path: "/noticias",
    type: "website",
  },
};

export function getSiteUrl() {
  return (process.env.VITE_SITE_URL || "https://conferenciasipaat.gob.ar").replace(
    /\/$/,
    ""
  );
}

export function formatSeoTitle(title) {
  if (!title || title === SITE.defaultTitle) return SITE.defaultTitle;
  return SITE.titleTemplate.replace("%s", title);
}

export function buildCanonicalUrl(path = "/") {
  const siteUrl = getSiteUrl();
  let normalizedPath = path.startsWith("/") ? path : `/${path}`;
  if (normalizedPath === "/") {
    return siteUrl;
  }
  if (normalizedPath.endsWith("/")) {
    normalizedPath = normalizedPath.slice(0, -1);
  }
  return `${siteUrl}${normalizedPath}`;
}

export function buildAbsoluteAssetUrl(assetPath, siteUrl = getSiteUrl()) {
  if (!assetPath) return siteUrl;
  if (/^https?:\/\//i.test(assetPath)) return assetPath;
  const normalizedPath = assetPath.startsWith("/") ? assetPath : `/${assetPath}`;
  return `${siteUrl}${normalizedPath}`;
}

export function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function buildSocialMetaTags({
  title,
  description,
  url,
  image,
  type = "website",
}) {
  const safeTitle = escapeHtml(title);
  const safeDescription = escapeHtml(description);

  return `
    <link rel="canonical" href="${url}" />
    <meta property="og:site_name" content="${escapeHtml(SITE.name)}" />
    <meta property="og:locale" content="es_AR" />
    <meta property="og:type" content="${type}" />
    <meta property="og:title" content="${safeTitle}" />
    <meta property="og:description" content="${safeDescription}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${image}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${safeTitle}" />
    <meta name="twitter:description" content="${safeDescription}" />
    <meta name="twitter:image" content="${image}" />
  `.trim();
}

export function injectSocialMeta(html, meta) {
  const socialTags = buildSocialMetaTags(meta);
  const withoutOldSocial = html
    .replace(/\s*<link rel="canonical" href="[^"]*" \/>/g, "")
    .replace(/\s*<meta property="og:[^"]*" content="[^"]*" \/>/g, "")
    .replace(/\s*<meta name="twitter:[^"]*" content="[^"]*" \/>/g, "");

  let next = withoutOldSocial
    .replace(
      /<meta name="description" content="[^"]*" \/>/,
      `<meta name="description" content="${escapeHtml(meta.description)}" />`
    )
    .replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(meta.title)}</title>`)
    .replace("</head>", `    ${socialTags}\n  </head>`);

  // Contenido visible en el HTML inicial (antes de React).
  // Ayuda a Google a no tratar /noticias como página vacía / soft 404.
  if (meta.bodyHtml) {
    next = next.replace(
      /<div id="root"><\/div>/,
      `<div id="root">${meta.bodyHtml}</div>`
    );
  }

  return next;
}
