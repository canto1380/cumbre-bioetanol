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
          La 2° Cumbre de Bioetanol se propne como un punto de convergencia para líderes
          del sector público, privado y académico, con el propósito de consolidar el
          rol estratégico del bioetanol en la matriz energética nacional, promover el
          intercambio de experiencias y fortalecer la cooperación regional en torno a una
          industria clave para el desarrollo sostenible.
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
