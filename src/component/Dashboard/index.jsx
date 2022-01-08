import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Routes, Route, Link, Switch, NavLink } from 'react-router-dom'
import Limenu from '../Limenu';
import EarningsOverView from '../EarningsOverView'
Dashboard.propTypes = {

};


const menus = [

    { name: 'Trang Chủ ', class: "/", to: '/', exate: true },
    { name: 'Khách Hàng', class: "/khachhang", to: '/product-list', exate: false },
    { name: 'Đơn Hàng', class: "/donhang", to: '/order-list', exate: false },
]

const MenuLink = ({ label, to, exate }) => {
    return (
        <Route
            path={to}
            exact={exate}
            children={({ match }) => {
                var active = match ? 'nav-item active' : "";
                return (
                    <li style={{ color: "white", fontWeight: "bold", marginLeft: "-130px", marginTop: "20px", padding: "20px 20px" }} className={active}>
                        <Link to={to}>{label}</Link>

                    </li>
                )
            }}
        />
    )
}
function Dashboard(props) {
    return (
        <div>


            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink" />
                    </div>
                    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                </a>
                <hr className="sidebar-divider my-0" />

                <li className="nav-item">

                    <NavLink to="/Dashboard" className="nav-link " activateclassname="active" exact="true" > <i className="fas fa-fw fa-tachometer-alt" /> <span>Dashboard</span></NavLink>

                </li>
                <hr className="sidebar-divider" />
                <hr className="sidebar-divider" />
                <li className="nav-item">

                    <NavLink to="/home" className="nav-link " activateclassname="active" exact="true" > <i className="fas fa-fw fa-table" /> <span>Home</span></NavLink>

                </li>
                <li className="nav-item ">

                    <NavLink to="/Item" activateclassname="active" className="nav-link "  > <i className="fas fa-fw fa-table" /> <span>Item</span></NavLink>

                </li>


                {/* Divider */}
                <hr className="sidebar-divider d-none d-md-block" />
                {/* Sidebar Toggler (Sidebar) */}
                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle" />
                </div>
                {/* Sidebar Message */}

            </ul>

        </div>
    );
}

export default Dashboard;