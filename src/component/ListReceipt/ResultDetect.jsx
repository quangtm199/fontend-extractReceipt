import React from 'react';
import PropTypes from 'prop-types';
import { Markup } from 'interweave';
ResultDetect.propTypes = {
    dataHTML: PropTypes.object
};

function ResultDetect(props) {
    const { dataHTML } = props
    return (
        <div>
            <div className="p-5">
                <div className="text-center">
                    <h1 className="h4 text-black-700 mb-4">Kết Quả Hóa Đơn</h1>
                </div>

                <div className="form-group row">


                    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">

                    </div>

                    <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                        <Markup content={dataHTML} />
                    </div>
                </div>



                {/* {dataHTML} */}

            </div>
        </div>
    );
}

export default ResultDetect;