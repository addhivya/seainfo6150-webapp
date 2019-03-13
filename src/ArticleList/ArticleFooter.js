import React from 'react';
import styles from './ArticleFooter.module.css';

const ArticleFooter = () => (
    <footer className={styles.footer_main}>
        <div className={styles.footer}>
            &copy; 2019, Divya Amaravathy
        </div>
    </footer>
);

ArticleFooter.propTypes = {};

export default ArticleFooter;
