import { Badge } from "lucide-react";
import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import cronogramaData from '../../../../public/data/cronograma.json'
import { ScheduleTimeLine } from "./ScheduleTimeline";

export function Schedule() {
  return (
    <section id='cronograma' className='bio-schedule'>
      <SectionTitle
        badge={
          <Badge variant="success">
            Cronograma
          </Badge>
        }
        title='Agenda del evento'
        subtitle="Una jornada intensiva con paneles, conferencias magistrales y espacios de vinculación."
      />
      <div className="bio-schedule-container">
        {!cronogramaData || cronogramaData.length < 1 ? (
          <p>no hay datos para mostrar</p>
        ) : (
          <ScheduleTimeLine data={cronogramaData} />
        )
        }
      </div>
    </section>
  )
}