
import PropTypes from 'prop-types';

import React, { useState, useEffect } from 'react';
import "./ViewItem.scss"
import ItemDislaychange from './ItemDislaychange';
import { MapInteractionCSS } from 'react-map-interaction';
import Zoom from 'react-medium-image-zoom';
import axios from "axios";
import httpLink_service from '../API/Configs'
import httpLink_db from '../API/Configs'
Changitem.propTypes = {
    onCloseForm: PropTypes.func,
    onSubmitForm: PropTypes.func,
    changebill: PropTypes.func,
    billdetail: PropTypes.object,
    indexbill: PropTypes.number,
};

function Changitem(props) {

    const { onCloseForm, billdetail, customer, changebill, indexbill, onSubmitForm } = props
    const bill = billdetail


    const [billdetail123, setBilldetail123] = useState([]);
    const [toogle, setToogle] = useState(true);
    function onClickToglle() {
        setToogle(!toogle)
    }
    useEffect(() => {

        setBilldetail123(bill)

    }, []);
    const URL = httpLink_service.httpLink_service + "upload/"
    function onSubmit() {
        // id
        // console.log(billdetail123.id)
        const httpp = httpLink_db.httpLink_db + "resultBill/" + billdetail123.id.toString()
        // console.log(httpp)
        axios.put(
            httpp,
            billdetail123,
            {
                headers: {
                    'Access-Control-Allow-Origin': "*",
                    'Content-Type': 'application/json',
                },
            }
        ).then(res => {
            console.log(res)
            onCloseForm()
            onSubmitForm()

        }).catch(err => {
            console.log(err);
        })


    }
    function handleValueChange(e) {
        var name = e.target.name
        var value = e.target.type === "checkbox" ? e.target.checked : e.target.value;


        setBilldetail123({ ...billdetail123, [name]: value })

    }
    function changeitem(data1) {
        // console.log(data1)
        billdetail123.item[data1.index] = data1.billitem1234
        setBilldetail123({ ...billdetail123 })

    }
    // const [generalreceipt, setGeneralreceipt] = useState(

    //     {
    //         id_sp: "",
    //         avatar: "",
    //         status: "notdone",
    //         note: "",
    //         time: "",
    //         type: "shopping",
    //         name: ""
    //     }
    // );
    // setGeneralreceipt(billdetail)
    // console.log(billdetail)
    var billlist = bill['item'].map((item, index) => {
        return (<ItemDislaychange changeitem={changeitem} index={index} key={index} item={item} ></ItemDislaychange>

        )
    }
    )

    return (
        <div className='backgound'>

            <div className="container backgoundsmall">

                <div className="p-5 ">
                    <div className="Textcss">
                        <h1 className="text-gray-700 mb-4 Textcss" >Chỉnh Sửa
                        </h1>

                        <span className="fa fa-times-circle text-right right"
                            aria-hidden="true"
                            onClick={onCloseForm} > </span>
                        <hr></hr>
                    </div>
                    <div className="row ">
                        <div className="col-lg-4 d-none d-lg-block   " >


                            <button type="button" className="btn btn-success" onClick={onClickToglle} >

                                <span className="fa-solid fa-arrows-repeat" ></span>Nổi bật

                                <i class="fas fa-repeat"></i>

                            </button>

                            <div style={styles.container}>

                                {toogle && customer['avatar'] && (
                                    <div style={styles.preview}>
                                        <Zoom>
                                            {/* <MapInteractionCSS> */}
                                            <img
                                                src={URL + "ori" + customer['avatar']}
                                                style={styles.image}
                                                alt="Thumb"
                                            />
                                            {/* </MapInteractionCSS> */}

                                        </Zoom>
                                        {/* {remove} */}
                                    </div>

                                )}
                                {!toogle && customer['avatar'] && (
                                    <div style={styles.preview}>
                                        <Zoom>
                                            {/* <MapInteractionCSS> */}
                                            <img
                                                src={URL + customer['avatar']}
                                                style={styles.image}
                                                alt="Thumb"
                                            />
                                            {/* </MapInteractionCSS> */}

                                        </Zoom>
                                        {/* {remove} */}
                                    </div>

                                )}

                            </div>
                        </div>
                        <div className="col-lg-8" >



                            {bill['address'] && (
                                <span className="" id="">

                                    <b style={styles.mt_Left}>Địa Chỉ :</b>

                                    <span style={styles.mt_Left}>
                                        <input type="text" name="address" value={billdetail123.address} onChange={handleValueChange} placeholder="Tên Hóa Đơn" className="form-control form-control-user" />


                                    </span>


                                </span>)


                            }

                            {bill['phone'] && (
                                <span className="" id="">

                                    <b style={styles.mt_Left}>Số Điện Thoại :</b>
                                    <span style={styles.mt_Left}>
                                        <input type="text" name="phone" value={billdetail123.phone} onChange={handleValueChange} placeholder="Tên Hóa Đơn" className="form-control form-control-user" />


                                    </span>


                                </span>)


                            }
                            {bill['storename'] && (
                                <span className="" id="">

                                    <b style={styles.mt_Left}>Tên Cửa Hàng :</b>
                                    <span style={styles.mt_Left}>

                                        <input type="text" name="storename" value={billdetail123.storename} onChange={handleValueChange} placeholder="Tên Hóa Đơn" className="form-control form-control-user" />

                                    </span>

                                </span>)


                            }

                            {bill['seller'] && (
                                <span className="" id="">

                                    <b style={styles.mt_Left}>Nhân Viên Bán Hàng :</b>
                                    <span style={styles.mt_Left}>

                                        <input type="text" name="seller" value={billdetail123.seller} onChange={handleValueChange} placeholder="Tên Hóa Đơn" className="form-control form-control-user" />

                                    </span>


                                </span>)


                            }


                            {bill['totalcost'] && (
                                <span className="" id="">

                                    <b style={styles.mt_Left}>Tổng Số Tiền:</b>
                                    <span style={styles.mt_Left}>

                                        <input type="text" name="totalcost" value={billdetail123.totalcost} onChange={handleValueChange} placeholder="Tên Hóa Đơn" className="form-control form-control-user" />

                                    </span>


                                </span>)


                            }
                            {bill['totalreceived'] && (
                                <span className="" id="">

                                    <b style={styles.mt_Left}>Tổng Tiền Nhận:</b>
                                    <span style={styles.mt_Left}>

                                        <input type="text" name="totalreceived" value={billdetail123.totalreceived} onChange={handleValueChange} placeholder="Tên Hóa Đơn" className="form-control form-control-user" />

                                    </span>


                                </span>)


                            }


                            {bill['totalchange'] && (
                                <span className="" id="">

                                    <b style={styles.mt_Left}>Tiền Trả Khách</b>
                                    <span style={styles.mt_Left}>

                                        <input type="text" name="totalchange" value={billdetail123.totalchange} onChange={handleValueChange} placeholder="Tên Hóa Đơn" className="form-control form-control-user" />

                                    </span>

                                </span>)


                            }



                            {bill['total_qty'] && (
                                <span className="" id="">

                                    <b style={styles.mt_Left}>Tổng số lượng sản phẩm:</b>

                                    <span style={styles.mt_Left}>
                                        <input type="text" name="total_qty" value={billdetail123.total_qty} onChange={handleValueChange} placeholder="Tên Hóa Đơn" className="form-control form-control-user" />
                                    </span>
                                    <br></br>
                                </span>)


                            }


                        </div>

                    </div>
                    <table style={{ color: 'black', marginLeft: '20px', fontSize: '14px' }} border={3}>
                        <tbody>
                            <tr> <th>Sản phẩm</th><th>Số lượng</th><th>Đơn giá</th> <th>Thành tiền</th></tr>

                            {billlist}

                        </tbody>

                    </table>



                    <br></br>
                    <button type="button" className="btn btn-danger" onClick={onSubmit} >

                        <span className="fas fa-edit " ></span>Chỉnh Sửa
                    </button>

                </div>






            </div>

        </div >

    );
}

export default Changitem;
const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 20,
    },
    mt_Left: {
        color: "black",
        marginLeft: "20px"

    },
    preview: {
        marginTop: 20,
        display: "flex",
        flexDirection: "column",
    },
    image: { maxWidth: "300px", maxHeight: "500px", borderRadius: "8px", marginTop: "-10px", marginLeft: "10px", marginRight: "30px" },
    delete: {
        cursor: "pointer",
        padding: 15,
        background: "red",
        color: "white",
        border: "none",
    },
};