import { useEffect, useMemo, useState } from "react";

import { NewsHero } from "./NewsHero";
import { NewsFilters } from "./NewsFilter";
import { NewsGrid } from "./NewsGrid";
import { PAGE_SEO, Seo } from "../../seo";
// import { NewsPagination } from "./NewsPagination";

import newsData from "../../../public/data/novedades.json";

const PAGE_SIZE = 9;

function NewsPage() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todas");
  const [categories, setCategories] = useState([])
  const [page, setPage] = useState(1);


  useEffect(() => {
    const cat = []

    newsData.forEach((item) => {
      if (!cat.includes(item.badge)) {
        cat.push(item.badge)
      }
    })

    setCategories(cat)
  }, [newsData])

  const filteredNews = useMemo(() => {
    return newsData.filter((item) => {

      const matchesSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "Todas" ||
        item.badge === category;

      return matchesSearch && matchesCategory;

    });

  }, [search, category]);

  const totalPages = Math.ceil(filteredNews.length / PAGE_SIZE);

  const currentNews = filteredNews.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  return (
    <>
      <Seo
        title={PAGE_SEO.news.title}
        description={PAGE_SEO.news.description}
        path={PAGE_SEO.news.path}
        type={PAGE_SEO.news.type}
        keywords={[
          "noticias II Cumbre de Bioetanol",
          "cumbre bioetanol Tucumán",
          "IPAAT bioetanol",
          "biocombustibles Argentina",
          "noticias de Bioetanol",
          'noticias de biocombustibles',
        ]}
      />
      <NewsHero />
      <NewsFilters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        categories={categories}
      />

      <NewsGrid news={currentNews} />

      {/* <NewsPagination
        page={page}
        totalPages={totalPages}
        onChange={setPage}
      /> */}

    </>
  );
}

export default NewsPage;