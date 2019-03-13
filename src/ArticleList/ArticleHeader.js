import React from 'react';
import styles from './ArticleHeader.module.css';

const ArticleHeader = () => (
    <header className={styles.header_main}>
        <div className={styles.header}>
            The INFO6150 News
        </div>
        <div className={styles.date}>
            {"Wed, February 26, 2019"}
        </div>
    </header>
);

ArticleHeader.propTypes = {};

export default ArticleHeader;
