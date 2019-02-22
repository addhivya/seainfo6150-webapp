import React from "react";
import PropTypes from "prop-types";
import ArticleListItem from "./ArticleListItem";
import styles from "./ArticleList.module.css";
import ArticleImage from "./ArticleImage";

const ArticleList = ({ articles }) => (
  <div>
    <div className={styles.div2 + " " + styles.commonborder}>
      <div className={styles.div3 + " " + styles.commonborder}>
        <div className={styles.div4 + " " + styles.commonborder}>
          {
            // this iterates through the articles JSON and
            // calls your ArticleListItem component for each article
            <ul className={styles.ul1}>
              {
                  Object.values(articles).map(article => (
                      <li className={styles.li_main}><div className={styles.div_under_li}>
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
                      </li>
                  ))}
            </ul>
          }
        </div>
      </div>
    </div>
  </div>
);
ArticleList.propTypes = {
  articles: PropTypes.object.isRequired
};

export default ArticleList;
