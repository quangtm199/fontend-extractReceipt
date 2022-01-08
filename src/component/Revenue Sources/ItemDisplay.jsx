import React from 'react';
import PropTypes from 'prop-types';

ItemDisplay.propTypes = {
    item: PropTypes.object
};

function ItemDisplay(props) {
    const { item } = props


    return (

        <tr><td>{item['nameitem']}</td><td> {item['unit']} </td><td>{item['unitprice']}</td><td>{item['price']}</td></tr>


    );
}

export default ItemDisplay;