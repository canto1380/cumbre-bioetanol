import { CalendarDays, MapPin } from "lucide-react";
import Button from '../../ui/Buttons/Button'
import { scroller } from 'react-scroll'
import { HERO_EVENT } from "../Hero/hero.constant";

export function AboutData() {
  return (
    <div className="bio-about-card">
      <div className="bio-about-info">
        <div className="bio-about-item">
          <div className="bio-about-item-icon">
            <CalendarDays size={22} />
          </div>
          <div>
            <span className="bio-about-item-label">
              Fecha
            </span>
            <h4>
              {HERO_EVENT?.date}
            </h4>
          </div>
        </div>
        <div className="bio-about-item">
          <div className="bio-about-item-icon">
            <MapPin size={22} />
          </div>
          <div>
            <span className="bio-about-item-label">
              Lugar
            </span>
            <h4>
              {HERO_EVENT?.location}
            </h4>
          </div>
        </div>
      </div>
      <div className="bio-about-content">
        <h3>
          Acerca del evento
        </h3>
        <p>
        Esta Cumbre busca impulsar políticas de Estado y acciones concretas que acompañen la transición energética de Argentina,
        respaldadas por un marco regulatorio que garantice previsibilidad y seguridad para la producción de biocombustibles.<br/>
        El debate se centrará en el papel del bioetanol de caña de azúcar como motor de una movilidad sostenible y a la actualización
        del marco normativo vigente. Además se mostrarán los avances técnicos y tecnológicos que marcan el presente y proyectan
        el futuro de esta industria.
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
          Quiero Participar
        </Button>
      </div>
    </div>
  )
}
