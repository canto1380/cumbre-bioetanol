export function SponsorCard({ data }) {
  return (
    <article className="bio-sponsor-card">
      <div className="bio-sponsor-image">
        <img
          src={data.image}
          alt={data.alt}
          loading="lazy"
        />
      </div>
      <div className="bio-sponsor-content">
        <div className="bio-sponsor-name">
          <p>{data.institucion}</p>
        </div>
        {data.tipo && (
          <div className="bio-sponsor-type">
            <p>{data.tipo}</p>
          </div>
        )}
      </div>
    </article>
  )
}