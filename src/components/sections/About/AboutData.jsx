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
        Esta 2da. edición de la Cumbre de Bioetanol busca impulsar políticas de Estado y 
        acciones concretas que acompañen la transición energética de Argentina, promover 
        el intercambio de experiencias y fortalecer la cooperación regional en torno a una 
        industria clave para el desarrollo sostenible. Impulsando un marco regulatorio 
        sólido que garantice previsibilidad y seguridad jurídica para la producción de 
        biocombustibles.
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
