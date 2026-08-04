import { Badge } from "lucide-react";
import SectionTitle from "../../ui/SectionTitle/SectionTitle.jsx";
import { MapsFrame } from "./Maps.jsx";
import { AboutData } from "./AboutData.jsx";

export function About() {
  return (
    <section id='sobre-evento' className='bio-about'>
      {/* <Container> */}
        <SectionTitle
          badge={
            <Badge variant="success">
              Sobre el evento
            </Badge>
          }
          title="Impulsando el bioetanol de caña"
          subtitle="Este espacio de convergencia para líderes del sector público, privado y 
          académico, con el propósito de consolidar el rol estratégico del bioetanol en la
          matriz energética Argentina."
        />
        <div className="bio-about-grid">
          {/* Información */}
          <AboutData />

          {/* Mapa */}
          <MapsFrame url="https://www.google.com/maps?q=Hotel+Catalinas+Park+Tucuman&output=embed"/>
        </div>
      {/* </Container> */}
    </section>
  )
}
