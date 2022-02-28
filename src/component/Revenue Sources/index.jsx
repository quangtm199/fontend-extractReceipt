import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import HeadAddReicepts from '../HeadAddReicepts';
import { BrowserRouter as Router, Route, Link, Routes, NavLink } from 'react-router-dom'
import axios from "axios";
import BillItem from './BillItem';
import httpLink_service from '../API/Configs'
import httpLink_db from '../API/Configs'
RevenueSoureces.propTypes = {

};

const http = axios.create({
    baseURL: httpLink_db.httpLink_db,
    headers: { "Content-type": "application/json" }


});

const getAlluser = async () => {

    return await http.get(`bills`, {
        headers: { "Content-type": "application/json" }

    })
}

const getAllBill = async () => {

    return await http.get(`resultBill`, {
        headers: { "Content-type": "application/json" }

    })
}


function RevenueSoureces(props) {
    const [bill, setBill] = useState([]);
    const [billdetail, setBilldetail] = useState([]);
    const [pagination, setPagination] = useState({
        page: 0,
        limit: 6,
        totalRow: 1

    });
    const [toogle, setToogle] = useState(false);
    function onSubmitForm() {
        setToogle(!toogle)
    }
    function changebill(data) {
        // console.log(data.bill)
        // console.log(billdetail[data.indexbill]['totalcost'])
        billdetail[data.indexbill] = data.bill
        // console.log( billdetail)
        setBilldetail(billdetail)
        // console.log(billdetail[data.indexbill])
    }
    function handlePageChange(newPage) {
        setPagination({ ...pagination, page: newPage })


    }
    useEffect(() => {

        rechieveCustomer();


    }, [toogle]);
    const rechieveCustomer = async () => {
        await getAllBill().then(res => {
            // console.log("data: ", res.data['list']);
            // if(res.data){
            //   setCustomer(res.data)
            // }
            setBilldetail(res.data)
            setBilldetail(

                res.data.map(function iterateItems(item) {
                    return item;
                }).reverse()

            )


        })


        await getAlluser().then(res => {
            setBill(res.data.map(function iterateItems(item) {
                return item;
            }).reverse())

        })

    }



    return (
        <div>
            <HeadAddReicepts />
            <div className="row">

                {/* Area Chart */}
                <div className="col-xl-10 col-lg-10">
                    <div className="card shadow mb-4">
                        {/* Card Header - Dropdown */}
                        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">

                        </div>
                        {/* Card Body */}

                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th className="text-center">Stt</th>
                                    <th className="text-center">Trạng Thái</th>
                                    <th className="text-center">Hóa Đơn</th>
                                    <th className="text-center">Loại</th>
                                    <th className="text-center">Tổng Tiền</th>
                                    <th className="text-center">Ngày nhập</th>
                                    <th className="text-center">Thao Tác</th>
                                </tr>
                            </thead>

                            {bill.map((item, index) => {
                                if (index >= pagination.page * pagination.limit && index <= pagination.page * pagination.limit + pagination.limit)

                                    return (
                                        <BillItem onSubmitForm={onSubmitForm} changebill={changebill} key={index} indexbill={index} customer={item} billdetail={billdetail[index]}>

                                        </BillItem>
                                    )

                            }

                            )

                            }


                        </table>
                        <div className="row">
                            <div className="col text-center">

                                <button disabled={pagination.page <= 0} onClick={() => handlePageChange(pagination.page - 1)} className='previous round'>
                                    <i className="fa fa-backward"></i>
                                </button>
                                <button disabled={(bill.length / (pagination.page * pagination.limit + pagination.limit)) <= 1} onClick={() => handlePageChange(pagination.page + 1)} className="next round">
                                    <i className="fa fa-forward"></i>
                                </button>
                            </div>
                        </div>


                    </div>


                </div>



            </div>


        </div>
    );
}

export default RevenueSoureces;
