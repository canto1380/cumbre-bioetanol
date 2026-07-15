import Container from "../../components/ui/Container";

export function NewsFilters({
  search,
  setSearch,
  category,
  setCategory,
  categories
}) {

  return (
    <section className="bio-news-filters">
      <Container>
        <div className="bio-news-filters-content">
          <input
            type="text"
            placeholder="Buscar noticia..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Todas</option>
            {categories.map((d, i) => (
              <option key={i}>{d}</option>
            ))}
          </select>
        </div>
      </Container>
    </section>
  );
}