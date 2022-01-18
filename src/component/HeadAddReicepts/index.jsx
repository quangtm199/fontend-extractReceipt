import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link, Routes, NavLink } from 'react-router-dom'
HeadAddReicepts.propTypes = {

};

function HeadAddReicepts(props) {
    return (
        <div>
            <row>
                <div className="col-xl-12 col-lg-12">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary">Xử Lý Hóa Đơn</h6>



                            <Link to="/home/addreceipt" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50" />Thêm Hóa Đơn</Link>

                        </div>

                    </div>
                </div>
            </row>
        </div>
    );
}

export default HeadAddReicepts;