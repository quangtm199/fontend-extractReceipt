import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ViewItem from './ViewItem';

BillItem.propTypes = {

    customer: PropTypes.object,
    billdetail: PropTypes.object,
    indexbill: PropTypes.number
};


function BillItem(props) {
    function onCloseForm() {
        setToogle(!toogle)
    }
    const { customer, indexbill, billdetail } = props
    const [bill, setBill] = useState([]);
    const [toogle, setToogle] = useState(false);
    function handleClick() {
        setToogle(!toogle)


    }
    var ViewItem123 = toogle ? <ViewItem onCloseForm={onCloseForm} billdetail={billdetail} customer={customer} ></ViewItem> : ""


    const URL = "http://172.26.33.214:4002/upload/"
    return (

        <tbody>
            <tr>
                {ViewItem123}
            </tr>

            <tr className="text-center">
                {/* id */}
                <td className="text-center">
                    {indexbill}
                </td>
                {/* status */}
                <td className="text-center">
                    {customer['status'] === "done" ?

                        <button type="button" className="btn btn-success "  >

                            <span className="fas fa-check-circle"> Done</span>
                            {/* <span className="fa fa-pencil mr-5"></span>Sửa */}
                        </button> :

                        <button type="button" className="btn btn-warning"> <span className="fas fa-ban"></span>NotDone</button>

                    }
                </td>
                {/* receipt */}
                <td className="text-center">
                    {<img
                        src={URL + customer['avatar']}
                        style={styles.image}
                        alt="Thumb"
                    />}
                </td>
                {/* type*/}
                <td className="text-center">
                    {customer['type']}
                </td>
                <td className="text-center">
                    {billdetail['totalcost']}

                </td>
                <td className="text-center">
                    {customer['time']}
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning" onClick={handleClick} >

                        <span className="fas fa-eye"></span>Xem
                    </button>
                    <button type="button" className="btn btn-danger" >

                        <span className="fas fa-edit " ></span>ChinhSua
                    </button>
                </td>
            </tr>

        </tbody>

    );
}

export default BillItem;
const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 20,
    },
    preview: {
        marginTop: 20,
        display: "flex",
        flexDirection: "column",
    },
    image: { maxWidth: "30px", maxHeight: "60px", },
    delete: {
        cursor: "pointer",
        padding: 15,
        background: "red",
        color: "white",
        border: "none",
    },
};