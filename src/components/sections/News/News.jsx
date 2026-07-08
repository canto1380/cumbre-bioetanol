import { Badge } from "lucide-react";
import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import CardNews from "./CardNews";
import newsData from '../../../../public/data/novedades.json'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function News() {
  console.log(newsData)
  return (
    <section id='novedades' className='bio-news'>
      <SectionTitle
        badge={
          <Badge variant="success">
            Novedades
          </Badge>
        }
        title='Lo último del sector'
        subtitle="Avances, políticas y resultados de la industria del bioetanol en Argentina.."
      />
      <div className="bio-news-container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          className="bio-news-swiper"
          spaceBetween={28}
          slidesPerView={3}
          loop
          // navigation
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
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {newsData.map((news) => (
            <SwiperSlide key={news.id}>
              <CardNews news={news} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}