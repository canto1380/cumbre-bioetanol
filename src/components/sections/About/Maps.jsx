export function MapsFrame(src) {
  return (
    <div className="bio-about-map">
      <iframe
        title="Hotel Catalinas Park"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={src.url}
      />
    </div>
  )
}