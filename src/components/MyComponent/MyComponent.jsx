import React from "react";
import ArticleList from "../ArticleList/ArticleList";

const MyComponent = ({ articles }) => {
  return <div>{articles.length > 0 && <ArticleList items={articles} />}</div>;
};

export default MyComponent;
