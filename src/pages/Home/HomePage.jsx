import { useLocation, useNavigate } from "react-router-dom";
import { About } from "../../components/sections/About/About";
import Hero from "../../components/sections/Hero/Hero";
import { Inscription } from "../../components/sections/Inscription/Inscription";
import { News } from "../../components/sections/News/News";
import { Schedule } from "../../components/sections/Schedule/Schedule";
import { Sponsor } from "../../components/sections/sponsor/Sponsor";
import { useEffect } from "react";
import { scroller } from 'react-scroll'
import { PAGE_SEO, Seo, buildCanonicalUrl, SITE } from "../../seo";

function HomePage() {
  const location = useLocation()
  const navigate = useNavigate()
  const seo = PAGE_SEO.home

  useEffect(() => {
    if (!location.state?.scrollTo) return

    setTimeout(() => {
      scroller.scrollTo(location.state.scrollTo, {
        duration: 200,
        smooth: true,
        offset: -90
      })

      navigate(location.pathname, {
        replace: true,
        state: {},
      });
    }, 100)
  }, [location, navigate])

  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description}
        path={seo.path}
        type={seo.type}
        keywords={[
          "bioetanol",
          "cumbre bioetanol",
          "IPAAT",
          "biocombustibles",
          "Tucumán",
        ]}
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            name: SITE.name,
            description: seo.description,
            startDate: SITE.eventDate,
            eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
            eventStatus: "https://schema.org/EventScheduled",
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
            },
            url: buildCanonicalUrl("/"),
          })}
        </script>
      </Seo>
      <Hero />
      <About />
      <News />
      <Schedule />
      <Inscription />
      <Sponsor />
    </>
  );
}

export default HomePage;