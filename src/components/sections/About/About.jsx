import { Badge } from "lucide-react";
import SectionTitle from "../../ui/SectionTitle/SectionTitle.jsx";
import { MapsFrame } from "./Maps.jsx";
import { AboutData } from "./AboutData.jsx";

export function About() {
  return (
    <section id='sobre-evento' className='bio-about'>
        <SectionTitle
          badge={
            <Badge variant="success">
              Sobre el evento
            </Badge>
          }
          title="Impulsando el bioetanol de caña de azúcar"
          subtitle="La II Cumbre de Bioetanol IPAAT reúne a líderes del sector público, privado y académico para consolidar el rol estratégico del bioetanol y los biocombustibles en la matriz energética de Argentina."
        />
        <div className="bio-about-grid">
          {/* Información */}
          <AboutData />

          {/* Mapa */}
          <MapsFrame url="https://www.google.com/maps?q=Hotel+Catalinas+Park+Tucuman&output=embed"/>
        </div>
    </section>
  )
}
