import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import logoMinsiterio from "../../../assets/ministerio-blanco.png";
import logoIPAAT from "../../../assets/ipaat-blanco.png";

export function FooterContacto() {
  return (
    <div className="bio-footer-column">

      <h4 className='bio-footer-organizers-title'>Organizadores</h4>

      <div className="bio-footer-organizers">
        <a
          href="https://www.mecontuc.gob.ar/"
          target="_blank"
          rel="noopener noreferrer"
          className="bio-footer-organizer-link"
           aria-label="Ministerio de Economía y Producción de Tucumán"
        >
          <img
            src={logoMinsiterio}
            alt="Ministerio de Economía y Producción de Tucumán"
            className="bio-footer-organizer-logo bio-footer-organizer-logo--ministerio"
          />
        </a>

        <a
          href="https://www.ipaat.gov.ar/"
          target="_blank"
          rel="noopener noreferrer"
          className="bio-footer-organizer-link"
          aria-label="IPAAT"
        >
        <img
          src={logoIPAAT}
          alt="IPAAT"
          className="bio-footer-organizer-logo bio-footer-organizer-logo--ipaat"
        />
        </a>
      </div>

    </div>
  )
}