import { ScheduleCard } from "./ScheduleCard";
import { motion } from "framer-motion";

export function ScheduleTimeLine({ data }) {
  return (
    <div className="bio-schedule-timeline">
      <motion.div
        className="bio-schedule-line"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      />
      {data.map((item, index) => (
        <ScheduleCard
          key={item.id}
          index={index}
          {...item}
        />
      ))}
    </div>
  );
}