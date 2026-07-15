import { CalendarDays, ArrowRight } from "lucide-react";

import Badge from "../../ui/Badge/Badge.jsx";

export default function CardNews({ news }) {
  return (
    <article className="bio-news-card">
      <a
        href={`${news.url}/${news.id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bio-news-image"
      >
        <img
          src={news.image}
          alt={news.title}
          loading="lazy"
        />
        <div className="bio-news-category">

          <Badge variant="success" className="bio-section-title-badge">
            {news.badge}
          </Badge>
        </div>
      </a>
      <div className="bio-news-content">

        <div className="bio-news-date">
          <CalendarDays size={15} />
          <span>{news.date}</span>
        </div>

        <h3 className="bio-news-title">
          {news.title}
        </h3>

        <p className="bio-news-description">
          {news.description}
        </p>

        <a
          href={`${news.url}/${news.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bio-news-link"
        >
          Leer más
          <ArrowRight
            size={18}
            className="bio-news-link-icon"
          />
        </a>
      </div>
    </article>
  );
}