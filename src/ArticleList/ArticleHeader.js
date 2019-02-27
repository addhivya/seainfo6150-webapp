import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArticleHeader.module.css';

const ArticleHeader = () => (
    <header className={styles.header_main}>
        <div className={styles.header}>
            The INFO6150 News
        </div>
        <div className={styles.date}>
            {"Wed, Feburary 20, 2019"}
        </div>
    </header>
);

ArticleHeader.propTypes = {};

export default ArticleHeader;
