import { CalendarDays, UserRound } from "lucide-react";
import { motion } from "framer-motion";
import {
  scheduleDotVariants,
  scheduleItemVariants,
  scheduleTimeVariants,
} from './schedule.animation.js';

export function ScheduleCard({
  index,
  time,
  type,
  title,
  speaker,
  description,
}) {
  return (
    <motion.article
      className="bio-schedule-item"
      custom={index}
      variants={scheduleItemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.35,
      }}
    >
      <motion.div
        className="bio-schedule-marker"
        variants={scheduleDotVariants}
      >
        <div className="bio-schedule-icon">
          <CalendarDays size={22} />
        </div>
      </motion.div>

      <motion.div
        className="bio-schedule-card"
        whileHover={{
          y: -6,
          transition: {
            duration: 0.25,
          },
        }}
      >
        <div className="bio-schedule-card-header">
          <div className="bio-schedule-header-content">
            {type && (
              <span className="bio-schedule-badge">
                {type}
              </span>
            )}

            <h3>{title}</h3>
            <p>{description}</p>

            {speaker && (
              <div className="bio-schedule-speaker">
                <UserRound size={16} />
                <span>{speaker}</span>
              </div>
            )}
          </div>

          <motion.div
            className="bio-schedule-time"
            variants={scheduleTimeVariants}
          >
            {time}
          </motion.div>
        </div>

      </motion.div>
    </motion.article>
  );
}