import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArticleListItem.module.css';


const ArticleListItem = ({title, date, year, author, shortText}) => (
     <div className={styles.div_main}>
        {<div className={styles.title+' '+styles.li_common}> {title} </div>}
        {<div className={styles.text+' '+styles.li_common}>{shortText}</div>}
        {<div className={styles.author+' '+styles.li_common}><address>By:{author}</address></div>}
        {<div className={styles.date+' '+styles.li_common}><time datetime={year}>{date}</time></div>}
        </div>
);

ArticleListItem.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    shortText: PropTypes.string.isRequired,
};

export default ArticleListItem;