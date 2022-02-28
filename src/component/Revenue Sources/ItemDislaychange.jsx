import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

ItemDislaychange.propTypes = {
    item: PropTypes.object,
    changeitem: PropTypes.func,
    index: PropTypes.number
};

function ItemDislaychange(props) {

    const { item, changeitem, index } = props
    const item123 = item
    const [billitem123, setBilldetail123] = useState([]);

    useEffect(() => {
        setBilldetail123(item)
    }, []);
    function handleValueChange(e) {
        var name = e.target.name
        var value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setBilldetail123({ ...billitem123, [name]: value })
        const billitem1234 = billitem123
        billitem1234[name] = value

        changeitem({ billitem1234, index })
    }
    // console.log(item)
    return (

        <tr><td>
            <input type="text" name="nameitem" value={billitem123.nameitem} onChange={handleValueChange} className="form-control form-control-user" />

        </td><td>
                <input type="text" name="unit" value={billitem123.unit} onChange={handleValueChange} className="form-control form-control-user" />



            </td><td>
                <input type="text" name="unitprice" onChange={handleValueChange} value={billitem123.unitprice} className="form-control form-control-user" />

            </td><td>
                <input type="text" name="price" value={billitem123.price} onChange={handleValueChange} className="form-control form-control-user" />


            </td></tr>


    );
}

export default ItemDislaychange;