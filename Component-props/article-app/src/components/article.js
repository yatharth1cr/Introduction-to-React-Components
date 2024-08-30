// import Articles from "./sarticles";

function Article(props) {
  return (
    <div className="article-card">
      <img src={props.urlToImage} alt="article-img" />
      <h2>{props.title}</h2>
    </div>
  );
}

export default Article;
