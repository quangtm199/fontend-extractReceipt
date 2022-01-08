import React from 'react';
import PropTypes from 'prop-types';

Limenu.propTypes = {

};

function Limenu(props) {
    return (
        <li className="nav-item">
            <a className="nav-link" href="tables.html">
                <i className="fas fa-fw fa-table" />
                <span>Tables</span></a>
        </li>
    );
}

export default Limenu;