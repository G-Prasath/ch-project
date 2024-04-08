import PropTypes from 'prop-types';
import React from 'react';
import ContactFrom from '../ContactFrom/ContactFrom';


const MainSearch = ({ show, onClose }) => {
    return (
        <div className={`main-search-active ${show ? "inside" : ""}`}>
            <div className="sidebar-search-icon">
                <button className="search-close" onClick={onClose}><i className="pe-7s-close"></i></button>
            </div>
            <div className="sidebar-search-input">
                <h1>Get a Free Quote</h1>
                <ContactFrom />
            </div>

        </div>
    )
}

MainSearch.propTypes = {
    show: PropTypes.bool,
    onClose: PropTypes.func
}

export default MainSearch;
