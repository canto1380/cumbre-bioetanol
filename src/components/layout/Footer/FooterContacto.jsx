import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import logoMinsiterio from "../../../assets/ministerio.png";
import logoIPAAT from "../../../assets/ipaat.png";

export function FooterContacto() {
  return (
    <div className="bio-footer-column">

      <h4>Organizadores</h4>

      <div className="bio-footer-organizers">
        <a
          href="https://www.mecontuc.gob.ar/"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <img
            src={logoMinsiterio}
            alt="Organizador 1"
          />
        </a>

        <a
          href="https://www.mecontuc.gob.ar/"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
        <img
          src={logoIPAAT}
          alt="Organizador 2"
        />
        </a>
      </div>

    </div>
  )
}