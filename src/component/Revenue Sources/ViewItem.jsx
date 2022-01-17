import React from 'react';
import PropTypes from 'prop-types';
import "./ViewItem.scss"
import ItemDisplay from './ItemDisplay';
import { MapInteractionCSS } from 'react-map-interaction';
import Zoom from 'react-medium-image-zoom';

ViewItem.propTypes = {
    onCloseForm: PropTypes.func,
    billdetail: PropTypes.object
};

function ViewItem(props) {

    const { onCloseForm, billdetail, customer } = props

    const URL = "http://172.26.33.214:4002/upload/"

    var billlist = billdetail['item'].map((item, index) => {
        return (<ItemDisplay key={index} item={item} ></ItemDisplay>

        )
    }
    )

    return (
        <div className='backgound'>




            <div className="container backgoundsmall">

                <div className="p-5 ">
                    <div className="Textcss">
                        <h1 className="text-gray-700 mb-4 Textcss" >Chi Tiết
                        </h1>

                        <span className="fa fa-times-circle text-right right"
                            aria-hidden="true"
                            onClick={onCloseForm} > </span>
                        <hr></hr>
                    </div>
                    <div className="row ">
                        <div className="col-lg-4 d-none d-lg-block   " >
                            <div style={styles.container}>

                                {customer['avatar'] && (
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

                        <div className="col-lg-8">

                            <span className="" id="">
                                <b style={styles.mt_Left}>Địa Chỉ :</b>
                                <span style={styles.mt_Left}>
                                    {billdetail['address']}
                                </span>


                            </span>
                            <br></br>
                            <span className="" id="">
                                <b style={styles.mt_Left}>Cửa Hàng :</b>
                                <span style={styles.mt_Left}>
                                    {billdetail['storename']}
                                </span>


                            </span>

                            <br></br>
                            <span className="" id="">
                                <b style={styles.mt_Left}>Nhân Viên :</b>
                                <span style={styles.mt_Left}>
                                    {billdetail['seller']}
                                </span>


                            </span>

                            <br></br>


                            <span className="" id="">
                                <b style={styles.mt_Left}>Tổng Số Tiền:</b>
                                <span style={styles.mt_Left}>
                                    {billdetail['totalcost']}
                                </span>


                            </span>

                            <br></br>
                            <span className="" id="">
                                <b style={styles.mt_Left}>Tổng Tiền Nhận:</b>
                                <span style={styles.mt_Left}>
                                    {billdetail['totalreceived']}
                                </span>


                            </span>


                            <br></br>

                            <span className="" id="">
                                <b style={styles.mt_Left}>Tiền Trả Khách:</b>
                                <span style={styles.mt_Left}>
                                    {billdetail['totalchange']}
                                </span>


                            </span>


                            <br></br>

                            <table style={{ color: 'black', marginLeft: '20px', fontSize: '14px' }} border={3}>
                                <tbody>
                                    <tr> <th>Sản phẩm</th><th>Số lượng</th><th>Đơn giá</th> <th>Thành tiền</th></tr>

                                    {billlist}

                                </tbody>

                            </table>





                        </div>
                    </div>
                </div>






            </div>

        </div >

    );
}

export default ViewItem;
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