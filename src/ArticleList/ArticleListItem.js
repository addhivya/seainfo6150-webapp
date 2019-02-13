import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArticleListItem.module.css';


const ArticleListItem = ({title, date, year, author, shortText}) => (
   <ul className={styles.ul1}>
       {<li className={styles.title+' '+styles.li_common}> {title} </li>}
       {<li className={styles.text+' '+styles.li_common}>{shortText}</li>}
       {<li className={styles.author+' '+styles.li_common}><author>By: {author}</author></li>}
       {<li className={styles.date+' '+styles.li_common}><time datetime={date}></time></li>}
    </ul>
);

ArticleListItem.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    shortText: PropTypes.string.isRequired,
};

export default ArticleListItem;