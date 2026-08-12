import { useLocation, useNavigate } from "react-router-dom";
import { About } from "../../components/sections/About/About";
import Hero from "../../components/sections/Hero/Hero";
import { Inscription } from "../../components/sections/Inscription/Inscription";
import { News } from "../../components/sections/News/News";
import { Schedule } from "../../components/sections/Schedule/Schedule";
import { Sponsor } from "../../components/sections/sponsor/Sponsor";
import { useEffect } from "react";
import { scroller } from 'react-scroll'
import { PAGE_SEO, Seo } from "../../seo";
import { buildEventSchema } from "../../seo/eventSchema";
import portadaNoticias from "../../assets/portada-noticias.webp";

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
        image={portadaNoticias}
        keywords={[
          "II Cumbre de Bioetanol",
          "inscripción cumbre bioetanol",
          "cumbre bioetanol Tucumán",
          "cumbre bioetanol 2026",
          "IPAAT",
          "Hotel Catalinas",
          "bioetanol",
          "biocombustibles",
          "conferencias IPAAT",
          "Bioetanol Argentina",
          "Bioetanol Tucumán",
          "Biocombustibles Argentina",
          "Biocombustibles Tucumán",
        ]}
      >
        <script type="application/ld+json">
          {JSON.stringify(
            buildEventSchema({
              description: seo.description,
              image: portadaNoticias,
            })
          )}
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