import Article from "./article";
import allArticles from "../data/allArticles";

function Articles() {
  return (
    <section className="articles-parent">
      <h1>Articles</h1>
      <div className="flex">
        {allArticles.map((article) => (
          <Article key={article.publishedAt} {...article} />
        ))}
      </div>
    </section>
  );
}

export default Articles;
