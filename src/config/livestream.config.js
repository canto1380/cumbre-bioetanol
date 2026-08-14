export const LIVESTREAM = {
  // Pegá el ID o la URL completa del vivo de YouTube.
  // Ej: dQw4w9WgXcQ  o  https://www.youtube.com/watch?v=dQw4w9WgXcQ
  youtubeVideoId:
    import.meta.env.VITE_YOUTUBE_STREAM_ID || "",
  youtubeChannelUrl: "https://www.youtube.com/@ipaat_tucuman/live",
  startAt: "2026-08-21T08:30:00-03:00",
  endAt: "2026-08-21T16:00:00-03:00",
  openEventName: "bio:open-livestream",
};

export function getYoutubeEmbedUrl( { autoplay = true } = {}) {
  console.log('autoplay', autoplay);
  const id = LIVESTREAM.youtubeVideoId
  if (!id) return "";

  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
  });

  if (autoplay) params.set("autoplay", "1");

  return `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`;
}

export function openLivestreamModal() {
  window.dispatchEvent(new CustomEvent(LIVESTREAM.openEventName));
}

export function getLivestreamPhase(now = new Date()) {
  // const forced = import.meta.env.VITE_LIVESTREAM_FORCE;
  // if (forced === "upcoming" || forced === "live" || forced === "ended") {
  //   return forced;
  // }

  const start = new Date(LIVESTREAM.startAt);
  const end = new Date(LIVESTREAM.endAt);

  if (now < start) return "upcoming";
  if (now >= start && now <= end) return "live";
  if(now > end) return "ended";
  return "upcoming";
}
