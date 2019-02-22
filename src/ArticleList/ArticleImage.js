import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArticleImage.module.css';

const ArticleImage = ({url, title}) => (
    <div className={styles.imageDiv}>
        <img src={url} alt={title} className={styles.img} />
    </div>
);

ArticleImage.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default ArticleImage;
