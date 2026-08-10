import { CalendarDays, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Badge from "../../ui/Badge/Badge.jsx";

export default function CardNews({ news }) {

  const to = `${news.url}/${news.slug}`;

  return (
    <article className="bio-news-card">
      <Link to={to} className="bio-news-image">
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
      </Link>
      <div className="bio-news-content">
        <div className="bio-news-date">
          <CalendarDays size={15} />
          <span>{news.date}</span>
        </div>

        <h3 className="bio-news-title">
          <Link to={to}>{news.title}</Link>
        </h3>

        <p className="bio-news-description">
          {news.description}
        </p>

        <Link to={to} className="bio-news-link">
          Leer más
          <ArrowRight
            size={18}
            className="bio-news-link-icon"
          />
        </Link>
      </div>
    </article>
  );
}
