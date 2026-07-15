import { useLocation } from "react-router-dom";
import { About } from "../../components/sections/About/About";
import Hero from "../../components/sections/Hero/Hero";
import { Inscription } from "../../components/sections/Inscription/Inscription";
import { News } from "../../components/sections/News/News";
import { Schedule } from "../../components/sections/Schedule/Schedule";
import { Sponsor } from "../../components/sections/sponsor/Sponsor";
import { useEffect } from "react";
import { scroller } from 'react-scroll'

function HomePage() {
  const location = useLocation()

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
  }, [location])
  return (
    <>
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