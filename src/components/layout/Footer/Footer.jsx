import { FooterLogos } from "./FooterLogos";
import { FooterContacto } from "./FooterContacto";
import { FooterRedes } from "./FooterRedes";

export function Footer() {
  return (
    <footer className="bio-footer">

      <div className="bio-footer-container">

        <FooterLogos />

        <FooterContacto />

        <FooterRedes />

      </div>

      <div className="bio-footer-bottom">
        © 2026 II Cumbre de Bioetanol. Todos los derechos reservados.
      </div>

    </footer>
  );
}