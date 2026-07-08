import { Badge, CalendarDays, Container, MapPin } from "lucide-react";
import SectionTitle from "../../ui/SectionTitle/SectionTitle.jsx";
import Button from '../../ui/Buttons/Button.jsx'
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
          subtitle="Una jornada que reúne a la industria, el sector público, la academia y la sociedad civil para trazar la hoja de ruta del bioetanol argentino."
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
