import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import HeadAddReicepts from '../HeadAddReicepts';
import { BrowserRouter as Router, Route, Link, Routes, NavLink } from 'react-router-dom'
import axios from "axios";
import BillItem from './BillItem';
RevenueSoureces.propTypes = {

};

const http = axios.create({
    baseURL: ' http://172.18.5.16:4000',
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

    function handlePageChange(newPage) {
        setPagination({ ...pagination, page: newPage })


    }
    useEffect(() => {

        rechieveCustomer();


    }, []);
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
                                    <th className="text-center">ID</th>
                                    <th className="text-center">Status</th>
                                    <th className="text-center">Receipt</th>
                                    <th className="text-center">Type</th>
                                    <th className="text-center">Total</th>
                                    <th className="text-center">Date</th>
                                    <th className="text-center"></th>
                                </tr>
                            </thead>

                            {bill.map((item, index) => {
                                if (index >= pagination.page * pagination.limit && index <= pagination.page * pagination.limit + pagination.limit)

                                    return (
                                        <BillItem key={index} indexbill={index} customer={item} billdetail={billdetail[index]}>

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
