import React from 'react';
import PropTypes from 'prop-types';
import HeaderFields from "./HeaderFields";

const Article = ({ title, date, author, children }) => (
    <div>
        <header>
        {
            <HeaderFields title ={"Title"} value={title} />

        }
        {
            <HeaderFields title={"Date"} value={date} />
        }
        {
            <HeaderFields title={"Author"} value={author} />
        }
        </header>
        {
            children
        }
    </div>
);

Article.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
};

export default Article;