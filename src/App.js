import logo from './logo.svg';
import './App.css';
import Dashboard from './component/Dashboard'
import Item from './component/Item'
import Header from './component/Header';
import Report from './component/report';
import RevenueSoureces from './component/Revenue Sources';
import EarningsOverView from './component/EarningsOverView';

import { BrowserRouter as Router, Route, Link, Routes, NavLink } from 'react-router-dom'
import Projects from './component/Projects';

import ListReceipt from './component/ListReceipt';

function App() {
  return (

    <div id="wrapper">
      {/* Sidebar */}
      <Router>

        <Dashboard></Dashboard>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <div className="container-fluid">
              <Header />

              <Routes>
              <Route path="/" element={<EarningsOverView />}  > </Route>
                <Route path="/Dashboard" element={<EarningsOverView />}  > </Route>
                <Route path="/home/addreceipt" element={<ListReceipt />}  > </Route>
                <Route path="/home" element={<RevenueSoureces />}  > </Route>

                <Route path="/Item" element={<Projects />}  > </Route>
                {/* <Route path="/home">    <EarningsOverView />    </Route>
              <Route path="/Item">   <EarningsOverView />           </Route> */}
              </Routes>
            </div>
          </div>

          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">

              </div>
            </div>
          </footer>

        </div>
        {/* <Item></Item> */}
        {/* End of Sidebar */}
        {/* Content Wrapper */}


        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up" />
        </a>
      </Router>
    </div >

  );
}

export default App;
