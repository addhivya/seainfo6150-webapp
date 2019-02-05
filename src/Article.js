import React from 'react';
import PropTypes from 'prop-types';
import HeaderFieldsName from "./HeaderFieldsName";
import HeaderFieldsDate from "./HeaderFieldsDate";
import HeaderFieldsAuthor from "./HeaderFieldsAuthor";

const Article = ({ title, date, author, children }) => (
    <div>
        <header>
        {
            <HeaderFieldsName title ={"Title"} value={title} />
        }
        {
            <HeaderFieldsDate  title={"Date"} value={date} />
        }
        {
            <HeaderFieldsAuthor title={"Author"} value={author} />
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