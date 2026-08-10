import { useEffect, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, CalendarDays, ChevronRight } from "lucide-react";

import Badge from "../../components/ui/Badge/Badge";
import Button from "../../components/ui/Buttons";
import { Seo, buildCanonicalUrl } from "../../seo";
import newsData from "../../../public/data/novedades.json";
import NotFoundPage from "../NotFound/NotFoundPage";

function NewPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const news = useMemo(
    () => {
      const news = newsData.find((item) => String(item.slug) === String(slug));
      if (!news) {
        navigate("/noticias");
      }
      return news;

    },
    [slug]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!news) {
    return (
      <NotFoundPage />
      // <section className="bio-article">
      //   <Seo
      //     title="Noticia no encontrada"
      //     description="La novedad solicitada no existe o fue eliminada."
      //     path={`/noticias/${slug}`}
      //     noindex
      //   />
      //   <div className="bio-article-empty">
      //     <h1>Noticia no encontrada</h1>
      //     <p>La novedad que buscás no existe o fue eliminada.</p>
      //     <div className="bio-article-actions">
      //       <Button onClick={() => navigate("/noticias")}>
      //         Ver todas las noticias
      //       </Button>
      //       <Link to="/" className="bio-article-back">
      //         Volver al inicio
      //       </Link>
      //     </div>
      //   </div>
      // </section>
    );
  }

  const paragraphs = news.content?.length ? news.content : [];

  const articlePath = `/noticias/${news.slug}`;

  return (
    <article className="bio-article">
      <Seo
        title={news.title}
        description={news.description}
        path={articlePath}
        image={news.image}
        type="article"
        keywords={[news.badge, "bioetanol", "noticias"]}
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: news.title,
            description: news.description,
            image: [news.image],
            datePublished: news.date,
            author: {
              "@type": "Organization",
              name: "II Cumbre de Bioetanol",
            },
            publisher: {
              "@type": "Organization",
              name: "IPAAT",
            },
            mainEntityOfPage: buildCanonicalUrl(articlePath),
          })}
        </script>
      </Seo>
      <div className="bio-article-hero">
        <img src={news.image} alt={news.title} className="bio-article-hero-image" />
        <div className="bio-article-hero-overlay" />
        <div className="bio-article-hero-content">
          <nav className="bio-news-breadcrumb" aria-label="Miga de pan">
            <Link to="/">Inicio</Link>
            <ChevronRight size={16} />
            <Link to="/noticias">Noticias</Link>
            <ChevronRight size={16} />
            <span>{news.badge}</span>
          </nav>

          <Badge variant="success" className="bio-section-title-badge">
            {news.badge}
          </Badge>

          <h1>{news.title}</h1>

          <div className="bio-news-date">
            <CalendarDays size={16} />
            <span>{news.date}</span>
          </div>
        </div>
      </div>

      <div className="bio-article-body">
        <p className="bio-article-lead">{news.description}</p>

        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        <div className="bio-article-actions">
          <Button
            variant="outline"
            leftIcon={<ArrowLeft size={18} />}
            onClick={() => navigate("/noticias")}
          >
            Volver a noticias
          </Button>
        </div>
      </div>
    </article>
  );
}

export default NewPage;
