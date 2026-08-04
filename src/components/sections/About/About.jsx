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
          title="Una cumbre por el bioetanol"
          subtitle="Se constituye como un espacio de diálogo y
           reflexión que reafirma el compromiso de Tucumán y del NOA con una 
           matriz energética más limpia, federal y sustentable para toda la Argentina."
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
