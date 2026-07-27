import { Helmet } from "react-helmet-async";

import {
  buildAbsoluteAssetUrl,
  buildCanonicalUrl,
  formatSeoTitle,
  SITE,
} from "./seo.config";

function Seo({
  title,
  description,
  path = "/",
  image,
  type = "website",
  noindex = false,
  publishedTime,
  modifiedTime,
  keywords = [],
  children,
}) {
  const resolvedTitle = formatSeoTitle(title);
  const resolvedDescription = description || SITE.defaultDescription;
  const canonicalUrl = buildCanonicalUrl(path);
  const imageUrl = buildAbsoluteAssetUrl(image || "/Favicon.png");
  const robots = noindex ? "noindex, nofollow" : "index, follow";

  return (
    <Helmet prioritizeSeoTags>
      <html lang={SITE.language} />
      <title>{resolvedTitle}</title>
      <meta name="description" content={resolvedDescription} />
      <meta name="robots" content={robots} />
      <meta name="theme-color" content={SITE.themeColor} />
      <link rel="canonical" href={canonicalUrl} />

      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}

      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content={SITE.locale} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      <meta name="twitter:image" content={imageUrl} />
      {SITE.twitterHandle && (
        <meta name="twitter:site" content={SITE.twitterHandle} />
      )}

      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}

      {children}
    </Helmet>
  );
}

export default Seo;
