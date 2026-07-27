export const SITE = {
  name: "2° Cumbre de Bioetanol",
  shortName: "Cumbre Bioetanol",
  defaultTitle: "2° Cumbre de Bioetanol",
  titleTemplate: "%s | 2° Cumbre de Bioetanol",
  defaultDescription:
    "II Cumbre de Bioetanol: encuentro nacional sobre bioetanol, políticas energéticas, innovación industrial e inscripción al evento en Tucumán, Argentina.",
  locale: "es_AR",
  language: "es",
  themeColor: "#1D7A4A",
  twitterHandle: "",
  organization: "IPAAT",
  eventDate: "2026-08-14",
  eventLocation: "Hotel Catalinas, Tucumán, Argentina",
};

export function getSiteUrl() {
  const url = import.meta.env.VITE_SITE_URL?.replace(/\/$/, "");
  return url || "https://cumbrebioetanol.ipaat.gov.ar";
}

export function buildCanonicalUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalizedPath === "/" ? "" : normalizedPath}`;
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
  image: "/Favicon.png",
};

export const PAGE_SEO = {
  home: {
    title: SITE.defaultTitle,
    description:
      "Inscribite a la II Cumbre de Bioetanol. Conocé el cronograma, novedades del sector y participá del encuentro en Tucumán el 14 de agosto de 2026.",
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
  notFound: {
    title: "Página no encontrada",
    description: "La página solicitada no existe en el sitio de la II Cumbre de Bioetanol.",
    path: "/404",
    noindex: true,
  },
};
