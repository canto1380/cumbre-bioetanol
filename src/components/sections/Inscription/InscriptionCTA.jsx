import {
  ArrowUpRight,
  CalendarDays,
  ClipboardList,
  Mail,
  MapPin,
} from "lucide-react";

import { INSCRIPTION } from "../../../config/inscription.config";

const STEPS = [
  {
    id: "1",
    title: "Completá tus datos",
    description: "Ingresá tu información personal y profesional.",
  },
  {
    id: "2",
    title: "Confirmá tu asistencia",
    description: "Enviá el formulario para reservar tu lugar.",
  },
  {
    id: "3",
    title: "Recibí la confirmación",
    description: "Te llegará un correo con los detalles del evento.",
  },
];

export function InscriptionCTA() {
  const hasFormUrl = Boolean(INSCRIPTION.formUrl);
  console.log(INSCRIPTION.formUrl);

  return (
    <div className="bio-inscription-card bio-inscription-cta">
      <div className="bio-inscription-cta-header">
        <div className="bio-inscription-cta-icon" aria-hidden="true">
          <ClipboardList size={28} />
        </div>

        <h3 className="bio-inscription-cta-title">Inscribite en minutos</h3>
        {/* <p className="bio-inscription-cta-description">
          El registro se realiza a través de nuestro formulario oficial. El
          proceso es simple y solo te llevará unos minutos.
        </p> */}
      </div>

      <ol className="bio-inscription-cta-steps">
        {STEPS.map((step, index) => (
          <li key={step.id} className="bio-inscription-cta-step">
            <span className="bio-inscription-cta-step-number">{index + 1}</span>
            <div>
              <strong>{step.title}</strong>
              <p>{step.description}</p>
            </div>
          </li>
        ))}
      </ol>

      {/* <div className="bio-inscription-cta-meta">
        <div className="bio-inscription-cta-meta-item">
          <CalendarDays size={18} aria-hidden="true" />
          <span>{HERO_EVENT.date}</span>
        </div>
        <div className="bio-inscription-cta-meta-item">
          <MapPin size={18} aria-hidden="true" />
          <span>{HERO_EVENT.location}</span>
        </div>
      </div> */}

      {hasFormUrl ? (
        <a
          className="bio-btn bio-btn-primary bio-btn-xl bio-btn-gradient bio-inscription-button bio-inscription-cta-button"
          href={INSCRIPTION.formUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          <span>Ir al formulario de inscripción</span>
          <ArrowUpRight size={20} aria-hidden="true" />
        </a>
      ) : (
        <p className="bio-inscription-cta-unavailable">
          El formulario de inscripción estará disponible próximamente.
        </p>
      )}

      {/* <p className="bio-inscription-note">
        <Mail size={15} aria-hidden="true" />
        <span>
          Una vez enviado, recibirás un correo electrónico con la confirmación
          de tu inscripción.
        </span>
      </p> */}
    </div>
  );
}
