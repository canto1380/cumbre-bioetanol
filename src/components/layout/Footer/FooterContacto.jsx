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

      {/* <div className="bio-footer-item">
        <MapPin size={18} />
        <span>
          San Martín 623 - Piso 9. Tucumán, Argentina
        </span>
      </div>

      <div className="bio-footer-item">
        <Phone size={18} />
        <span>
          381 5515421
        </span>
      </div>

      <div className="bio-footer-item">
        <Mail size={18} />
        <span>
          contactoweb@ipaat.gov.ar
        </span>
      </div> */}
      
      <div className="bio-footer-organizers">
        <img
          src={logoMinsiterio}
          alt="Organizador 1"
        />
        <img
          src={logoIPAAT}
          alt="Organizador 2"
        />
      </div>

    </div>
  )
}