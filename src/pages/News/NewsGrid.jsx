import Container from "../../components/ui/Container";
import CardNews from "../../components/sections/News/CardNews";

export function NewsGrid({ news }) {

  return (
    <section className="bio-news-grid-section">
      <Container>
        <div className="bio-news-grid">
          {news.map((item) => (
            <CardNews
              key={item.id}
              news={item}
            />
          ))}
        </div>
      </Container>
    </section>
  );

}