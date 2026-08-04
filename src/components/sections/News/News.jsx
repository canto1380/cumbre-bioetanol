import { Badge, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import Button from "../../ui/Buttons";
import CardNews from "./CardNews";
import newsData from "../../../../public/data/novedades.json";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function News() {
  return (
    <section id="novedades" className="bio-news">
      <SectionTitle
        badge={<Badge variant="success">Novedades</Badge>}
        title="Lo último del sector"
        subtitle="Avances, políticas y resultados de la industria del bioetanol en Argentina."
      />

      <div className="bio-news-container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          className="bio-news-swiper"
          spaceBetween={28}
          slidesPerView={1}
          loop={newsData.length > 3}
          watchOverflow
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 28,
            },
          }}
        >
          {newsData.map((news) => (
            <SwiperSlide key={news.id}>
              <CardNews news={news} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="bio-news-cta">
          <Link to="/noticias">
            <Button
              className="bio-btn-gradient"
              rightIcon={<ArrowRight size={18} />}
            >
              Ver todas las noticias
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
