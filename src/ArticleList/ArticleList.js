import React from "react";
import PropTypes from "prop-types";
import ArticleListItem from "./ArticleListItem";
import styles from "./ArticleList.module.css";

const ArticleList = ({ articles }) => (
  <div>
    <div className={styles.div2+' '+styles.commonborder}>
        <div className={styles.div3+' '+styles.commonborder}>
        <div className={styles.div4+' '+styles.commonborder}>
        {// this iterates through the articles JSON and
        // calls your ArticleListItem component for each article
        Object.values(articles).map(article => {
          return (
            <ArticleListItem
              key={article.slug}
              title={article.title}
              date={article.pubDate}
              year={article.pubYear}
              author={article.author}
              shortText={article.shortText}
            />
          );
        })}
      </div>

        </div>
    </div>
  </div>
);
ArticleList.propTypes = {
  articles: PropTypes.object.isRequired
};

export default ArticleList;
