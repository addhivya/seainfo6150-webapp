import React from 'react';
import PropTypes from 'prop-types';

const HeaderFields = ({ title, value }) => (
    <div>
        <b>{title}</b>: <time>{value}</time></div>
);

HeaderFields.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
};

export default HeaderFields;