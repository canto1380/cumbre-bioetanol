import { CalendarDays, Container, MapPin } from "lucide-react";
import Button from '../../ui/Buttons/Button'

export function AboutData({openRegisterModal}) {
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
              12 de Agosto, 2026
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
              Hotel Catalinas Park  Tucumán, Argentina
            </h4>
          </div>
        </div>
      </div>
      <div className="bio-about-content">
        <h3>
          Acerca del evento
        </h3>
        <p>
          La 2° Cumbre de Biocombustibles es el punto de encuentro
          institucional más relevante del sector en Argentina.
          Reúne a referentes públicos y privados para debatir el
          futuro del bioetanol, presentar avances tecnológicos,
          oportunidades de inversión y políticas que aceleren la
          transición hacia una matriz energética sustentable.
        </p>
      </div>
      <div className="bio-hero-actions">
        <Button
          className="bio-btn-gradient"
          onClick={openRegisterModal}
          size="xl"
        >
          Quiero Participar
        </Button>
      </div>
    </div>
  )
}
