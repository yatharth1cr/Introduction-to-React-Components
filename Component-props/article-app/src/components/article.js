import PropTypes from "prop-types";

function Article(props) {
  return (
    <div className="article-card">
      <img src={props.urlToImage} alt="article-img" />
      <h2>{props.title}</h2>
    </div>
  );
}

Article.propTypes = {
  urlToImage: PropTypes.string.isRequired,
};

export default Article;
