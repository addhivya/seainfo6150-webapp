import React from "react";
import PropTypes from "prop-types";
import ArticleTableRow from "./ArticleTableRow";


const ArticleTable = ({ articles }) => (
  <table>
    {<caption>Author's Words - Assignment 4</caption>}
    {
      <thead>
      <tr>
            <th colSpan={"1"} rowSpan={"1"}>{"CheckBox"}</th>
            <th colSpan={"1"} rowSpan={"1"}>{"Status"}</th>
            <th colSpan={"3"} rowSpan={"1"}>{"Author"}</th>
            <th colSpan={"3"} rowSpan={"1"}>{"Date"}</th>
            <th colSpan={"6"} rowSpan={"1"}>{"Text"}</th>
        </tr>
      </thead>
    }
    {
      // this iterates through the articles JSON and
      // calls your ArticleTableRow component for each article
      <tbody>
        {Object.values(articles).map(article => (
          <ArticleTableRow
            key={article.slug}
            title={article.title}
            date={article.pubDate}
            author={article.author}
            shortText={article.shortText}
          />
        ))}
      </tbody>
    }
  </table>
);

ArticleTable.propTypes = {
  articles: PropTypes.object.isRequired
};

export default ArticleTable;
