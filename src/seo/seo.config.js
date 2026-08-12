export const SITE = {
  name: "2° Cumbre de Bioetanol",
  shortName: "Cumbre Bioetanol",
  defaultTitle: "II Cumbre de Bioetanol IPAAT | Tucumán 21 de agosto 2026",
  titleTemplate: "%s | II Cumbre de Bioetanol IPAAT",
  defaultDescription:
    "Inscribite a la II Cumbre de Bioetanol IPAAT en Tucumán. Encuentro nacional sobre bioetanol, biocombustibles y transición energética. Hotel Catalinas, 21 de agosto de 2026.",
  locale: "es_AR",
  language: "es",
  themeColor: "#1D7A4A",
  twitterHandle: "",
  organization: "IPAAT",
  eventDate: "2026-08-21",
  eventLocation: "Hotel Catalinas, Tucumán, Argentina",
  defaultOgImage: "/favicon-192.png",
};

export function getSiteUrl() {
  const url = import.meta.env.VITE_SITE_URL?.replace(/\/$/, "");
  return url || "https://conferenciasipaat.gob.ar";
}

export function buildCanonicalUrl(path = "/") {
  const siteUrl = getSiteUrl();
  let normalizedPath = path.startsWith("/") ? path : `/${path}`;
  if (normalizedPath === "/") {
    return siteUrl;
  }

  // Sin barra final: coincide con React Router y evita 301 de Pretty URLs.
  if (normalizedPath.endsWith("/")) {
    normalizedPath = normalizedPath.slice(0, -1);
  }
  return `${siteUrl}${normalizedPath}`;
}

export function buildAbsoluteAssetUrl(assetPath) {
  if (!assetPath) return buildCanonicalUrl("/");
  if (/^https?:\/\//i.test(assetPath)) return assetPath;
  const normalizedPath = assetPath.startsWith("/") ? assetPath : `/${assetPath}`;
  return `${getSiteUrl()}${normalizedPath}`;
}

export function formatSeoTitle(title) {
  if (!title || title === SITE.defaultTitle) return SITE.defaultTitle;
  return SITE.titleTemplate.replace("%s", title);
}

export const DEFAULT_SEO = {
  title: SITE.defaultTitle,
  description: SITE.defaultDescription,
  path: "/",
  type: "website",
  image: "/favicon-192.png",
};

export const PAGE_SEO = {
  home: {
    title: SITE.defaultTitle,
    description:
      "Inscripción abierta a la II Cumbre de Bioetanol IPAAT. Participá el 21 de agosto de 2026 en el Hotel Catalinas, Tucumán. Cronograma, paneles y novedades del sector bioetanol.",
    path: "/",
    type: "website",
  },
  news: {
    title: "Noticias",
    description:
      "Noticias e inscripción sobre la II Cumbre de Bioetanol IPAAT en Tucumán: anuncios, biocombustibles y actualidad del sector en Argentina.",
    path: "/noticias",
    type: "website",
  },
  notFound: {
    title: "Página no encontrada",
    description: "La página solicitada no existe en el sitio de la II Cumbre de Bioetanol.",
    path: "/404",
    noindex: true,
  },
};
