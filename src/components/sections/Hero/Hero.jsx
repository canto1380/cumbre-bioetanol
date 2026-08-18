import clsx from "clsx";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Link } from "react-scroll";
import Button from "../../ui/Buttons";
import { HERO_EVENT } from "./hero.constant";
import heroSlides from "../../../../public/data/slider.json";
import useHeroSlider from "./useHeroSlider";
import { scroller } from 'react-scroll'
import { openLivestreamModal } from '../../../config/livestream.config'

function Hero() {
  const { activeIndex, goTo, goNext, goPrev } = useHeroSlider(heroSlides.length);
  const activeSlide = heroSlides[activeIndex];

  return (
    <section className="bio-hero" id="inicio">
      <div aria-hidden="true" className="bio-hero-background">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={clsx(
              "bio-hero-slide",
              index === activeIndex && "bio-hero-slide-active"
            )}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
      </div>

      <div aria-hidden="true" className="bio-hero-overlay" />

      <div className="bio-hero-inner">
        <div className="bio-hero-grid">
          <div className="bio-hero-copy">
            <span className="bio-hero-badge">
              <Sparkles size={14} />
              {activeSlide.badge}
            </span>

            <h1 className="bio-hero-title">
              <span>{HERO_EVENT.titleLead}</span>
              <span className="bio-hero-title-accent">
                {HERO_EVENT.titleAccent}
              </span>
            </h1>

            <p className="bio-hero-subtitle">{HERO_EVENT.subtitle}</p>

            <div className="bio-hero-meta">
              <p className="bio-hero-meta-item">
                <CalendarDays size={18} />
                <span>{HERO_EVENT.date}</span>
              </p>
              <p className="bio-hero-meta-item">
                <MapPin size={18} />
                <span>{HERO_EVENT.location}</span>
              </p>
            </div>

            <div className="bio-hero-actions">
              <Button
                className="bio-btn-gradient"
                onClick={() =>
                  scroller.scrollTo('inscripcion', {
                    smooth: true,
                    duration: 700,
                    offset: -100,
                  })
                }
                size="xl"
              >
                Inscribirme
              </Button>

              <Link
                className="bio-btn-hero-ghost"
                duration={700}
                offset={-100}
                smooth
                to="cronograma"
              >
                Ver cronograma
              </Link>
              
              <Button
                type="button"
                className="btn-enabled bio-btn-hero-ghost"
                onClick={openLivestreamModal}
                size="xl"
              >
                Ver transmisión
              </Button>
            </div>
          </div>
        </div>

        <div className="bio-hero-controls">
          <div aria-label="Indicadores del carrusel" className="bio-hero-pagination" role="tablist">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                aria-label={`Ir a la diapositiva ${index + 1}`}
                aria-selected={index === activeIndex}
                className={clsx(
                  "bio-hero-dot",
                  index === activeIndex && "bio-hero-dot-active"
                )}
                onClick={() => goTo(index)}
                role="tab"
                type="button"
              />
            ))}
          </div>

          <div className="bio-hero-arrows">
            <button
              aria-label="Diapositiva anterior"
              className="bio-hero-arrow"
              onClick={goPrev}
              type="button"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              aria-label="Diapositiva siguiente"
              className="bio-hero-arrow"
              onClick={goNext}
              type="button"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
