import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function NewsHero() {
  return (
    <section className="bio-news-hero">
      <div className="bio-news-background" />
      <div className="bio-news-overlay" />
      <div className="bio-news-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
        >

          <h1>Todas las noticias</h1>
          <p>
            Conocé las novedades, anuncios,
            entrevistas y actividades relacionadas
            con la II Cumbre de Bioetanol.
          </p>
          {/* <div className="bio-news-breadcrumb">
            <Link to="/">Inicio</Link>
            <ChevronRight size={16} />
            <span>Noticias</span>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}