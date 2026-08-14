import { useEffect, useState } from "react";

import { getLivestreamPhase } from "../config/livestream.config";

function getCountdown(targetDate, now) {
  const diff = Math.max(0, targetDate.getTime() - now.getTime());
  const totalHours = Math.floor(diff / (1000 * 60 * 60));

  return {
    days: Math.floor(totalHours / 24),
    hours: totalHours % 24,
    minutes: Math.floor((diff / (1000 * 60)) % 60),
  };
}

export function useLivestreamStatus(startAt) {
  /** START === INICIO DE LA CUMBRE (21-08-26 08:00:00) **/
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(timer);
  }, []);

  const phase = getLivestreamPhase(now);
  const countdown = getCountdown(new Date(startAt), now);
  console.log(phase, countdown, now);
  return { phase, countdown, now };
}
