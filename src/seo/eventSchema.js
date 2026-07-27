import { buildAbsoluteAssetUrl, buildCanonicalUrl, SITE } from "./seo.config";

export function buildEventSchema({ description, image }) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: SITE.name,
    description,
    startDate: SITE.eventDate,
    endDate: SITE.eventDate,
    url: buildCanonicalUrl("/"),
    image: [buildAbsoluteAssetUrl(image || SITE.defaultOgImage)],
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    performer: {
      "@type": "Organization",
      name: SITE.organization,
    },
    offers: {
      "@type": "Offer",
      url: `${buildCanonicalUrl("/")}#inscripcion`,
      price: "0",
      priceCurrency: "ARS",
      availability: "https://schema.org/InStock",
      validFrom: "2026-01-01",
    },
    location: {
      "@type": "Place",
      name: SITE.eventLocation,
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Miguel de Tucumán",
        addressRegion: "Tucumán",
        addressCountry: "AR",
      },
    },
    organizer: {
      "@type": "Organization",
      name: SITE.organization,
      url: buildCanonicalUrl("/"),
    },
  };
}
