import React from 'react';
import PropTypes from 'prop-types';

Overview.propTypes = {

};

function Overview(props) {
    return (
        <div className="row">

            {/* Area Chart */}
            <div className="col-xl-8 col-lg-7">
                <div className="card shadow mb-4">
                    {/* Card Header - Dropdown */}
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                        <div className="dropdown no-arrow">
                            <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                                <div className="dropdown-header">Dropdown Header:</div>
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                    </div>
                    {/* Card Body */}
                    <div className="card-body">
                        <div className="chart-area">
                            <canvas id="myAreaChart" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-4 col-lg-5">
                <div className="card shadow mb-4">
                    {/* Card Header - Dropdown */}
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>

                        <div className="dropdown no-arrow">
                            <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                                <div className="dropdown-header">Dropdown Header:</div>
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                    </div>
                    {/* Card Body */}
                    <div className="card-body">
                        <div className="chart-pie pt-4 pb-2">
                            <canvas id="myPieChart" />
                        </div>
                        <div className="mt-4 text-center small">
                            <span className="mr-2">
                                <i className="fas fa-circle text-primary" /> Direct
                            </span>
                            <span className="mr-2">
                                <i className="fas fa-circle text-success" /> Social
                            </span>
                            <span className="mr-2">
                                <i className="fas fa-circle text-info" /> Referral
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Overview;