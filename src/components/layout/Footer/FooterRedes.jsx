import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { Mail, MapPin, Phone } from "lucide-react";

export function FooterRedes() {
  return (
    <div className="bio-footer-column">
      <h4>Contacto</h4>

      <div className="bio-footer-item">
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
      </div>

      {/* <h4>Redes sociales</h4> */}
      <div className="bio-footer-redes">

        <a href="https://www.instagram.com/ipaat_tucuman" target="_blank" alt='Instagram IPAAT' className="btn-instagram">
          <FaInstagram size={28} className="btn-instagram"/>
        </a>

        <a href="https://www.linkedin.com/company/ipaat_tucuman/" target="_blank" alt='Linkedin IPAAT'>
          <FaLinkedinIn size={28} />
        </a>

        <a href="https://www.youtube.com/@ipaat_tucuman" target="_blank" alt='Youtube IPAAT'>
          <AiOutlineYoutube size={28} />
        </a>
      </div>

    </div>
  )
}