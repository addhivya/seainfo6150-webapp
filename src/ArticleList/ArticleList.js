import React from "react";
import PropTypes from "prop-types";
import ArticleListItem from "./ArticleListItem";
import styles from "./ArticleList.module.css";
import ArticleImage from "./ArticleImage";
import ArticleHeader from "./ArticleHeader";
import ArticleFooter from "./ArticleFooter";

const ArticleList = ({ articles }) => (
  <div>
    <div className={styles.div2 + " " + styles.commonborder}>
      <div className={styles.div3 + " " + styles.commonborder}>
          <ArticleHeader/>
        <div className={styles.div4 + " " + styles.commonborder}>
          {
            // this iterates through the articles JSON and
            // calls your ArticleListItem component for each article
            <div className={styles.ul1}>
              {
                  Object.values(articles).map(article => (
                      <div className={styles.div_under_li +" " +styles.li_main}>
                          <ArticleImage url={article.image._url} title={article.title}/>
                  <ArticleListItem
                    key={article.slug}
                    title={article.title}
                    date={article.pubDate}
                    year={article.pubYear}
                    author={article.author}
                    shortText={article.shortText}
                  />
                      </div>
                  ))}
            </div>
          }
        </div>
          <ArticleFooter/>
      </div>
    </div>
  </div>
);
ArticleList.propTypes = {
  articles: PropTypes.object.isRequired
};

export default ArticleList;
