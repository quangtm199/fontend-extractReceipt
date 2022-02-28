import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ViewItem from './ViewItem';
import Changitem from './Changitem'
import Zoom from 'react-medium-image-zoom'

import httpLink_service from '../API/Configs'

BillItem.propTypes = {

    customer: PropTypes.object,
    billdetail: PropTypes.object,
    indexbill: PropTypes.number,
    changebill: PropTypes.func,
    onSubmitForm: PropTypes.func

};


function BillItem(props) {
    function onCloseForm() {
        setToogle(!toogle)
    }

    const { customer, indexbill, billdetail, changebill, onSubmitForm } = props

    const [bill, setBill] = useState([]);
    const [toogle, setToogle] = useState(false);
    const [tooglefix, setTooglefix] = useState(false);
    function onCloseFormchange() {
        setTooglefix(!tooglefix)
    }
    function handleClick() {
        setToogle(!toogle)


    }
    function handleClickchange() {
        setTooglefix(!tooglefix)


    }
    var ViewItem1234 = tooglefix ? <Changitem onSubmitForm={onSubmitForm} indexbill={indexbill} changebill={changebill} onCloseForm={onCloseFormchange} billdetail={billdetail} customer={customer} ></Changitem> : ""

    var ViewItem123 = toogle ? <ViewItem changebill={changebill} onCloseForm={onCloseForm} billdetail={billdetail} customer={customer} ></ViewItem> : ViewItem1234


    const URL = httpLink_service.httpLink_service + "upload/"
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
                    {customer['status'] === "notdone" ?

                        <button type="button" className="btn btn-success "  >

                            <span className="fas fa-check-circle"> Hoàn thành</span>
                            {/* <span className="fa fa-pencil mr-5"></span>Sửa */}
                        </button> :

                        <button type="button" className="btn btn-warning"> <span className="fas fa-ban"></span>Chưa Hoàn thành</button>

                    }
                </td>
                {/* receipt */}
                <td className="text-center">

                    {<Zoom><img
                        src={URL + customer['avatar']}
                        style={styles.image}
                        alt="Thumb"
                    />
                    </Zoom>
                    }
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
                    <button type="button" className="btn btn-danger" onClick={handleClickchange} >

                        <span className="fas fa-edit " ></span>Chỉnh Sửa
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