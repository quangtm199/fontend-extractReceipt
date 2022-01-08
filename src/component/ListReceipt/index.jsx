import React from 'react';
import PropTypes from 'prop-types';
import RevenueSoureces from '../Revenue Sources';
import Report from '../report';
import "./Receipt.scss"
import { useState } from "react";
import InputReceipt from './InputReceipt';
import ResultDetect from './ResultDetect';
import axios from "axios";
ListReceipt.propTypes = {

};
const http = axios.create({
    baseURL: ' http://172.26.33.214:4002',
    headers: { "Content-type": "application/json" }


});


function ListReceipt(props) {

    const [selectedImage, setSelectedImage] = useState();

    const [generalReceipt, setGeneralRecepts] = useState(
        {
            avatar: "",
            status: "notdone",
            note: "",
            time: "",
            type: "",
            name: ""
        }
    );
    const [dataHTML, setdataHTML] = useState()
    const [objnew, setObjnew] = useState()
    const [value, setValue] = useState(true)
    // This function will be triggered when the file field change
    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
    };
    const removeSelectedImage = () => {
        setSelectedImage();
    };

    // axios.post(
    //     "http://172.26.33.214:4002/api/helpers/uploadAvatar",
    //     formData,
    //     {
    //         headers: {


    //             "Content-type": "multipart/form-data",
    //         },
    //     }
    // ) .then(res => {
    //     // setImg(res.data)
    //     // var obja={...obj,avatar:res.data}
    //     var dataHTMLnew = res.data['chuoitextocr']
    //     var objnew_result = res.data['result']
    //     setObjnew(objnew_result)
    //     setdataHTML(dataHTMLnew)
    //     axios.post(
    //         "http://172.18.5.16:4000/resultBill",
    //         objnew_result,
    //         {
    //             headers: {
    //                 'Access-Control-Allow-Origin': "*",
    //                 'Content-Type': 'application/json',
    //             },
    //         }
    //     ).then(res => {
    //         console.log(res)

    //     }).catch(err => {
    //         console.log(err);
    //     })
    //     // console.log(dataHTML)
    // }).catch(err => {
    //     console.log(err);
    // })

    const sendPostRequest = async (formData) => {

        const resp = await axios.post('http://172.26.33.214:4002/api/helpers/uploadAvatar', formData, {
            headers: {
                'Accept': 'application/json',

                "Content-type": "multipart/form-data",
            }, timeout: 1000 * 5
        });
        console.log("Asdsad", resp.data)
        console.log(resp.data['input'])
        console.log(resp.data['result'])
            ;

    }

    const HandleOnClick = (fromvalue) => {
        // e.preventDefault();
        // console.log("data", data)
        if (selectedImage) {
            setValue(!value)
            let formData = new FormData();

            console.log("selectedImage", selectedImage)
            formData.append('file', selectedImage);

            // console.log("form", formData)
            // for (var key of formData.entries()) {
            //     console.log(key[0] + ', ' + key[1])
            // }
            // console.log(formData['file'])
            axios.post(
                "http://172.18.5.16:4000/bills",
                fromvalue,
                {
                    headers: {
                        'Access-Control-Allow-Origin': "*",
                        'Content-Type': 'application/json',
                    },
                }
            ).then(res => {
                console.log(res)

            }).catch(err => {
                console.log(err);
            })

            // sendPostRequest(formData);
            axios.post(
                "http://172.26.33.214:4002/api/helpers/uploadAvatar",
                formData,
                {
                    headers: {


                        "Content-type": "multipart/form-data",
                    },
                }
            ).then(res => {
                console.log(res.data)
                // setImg(res.data)
                // var obja = { ...obj, avatar: res.data }
                var dataHTMLnew = res.data['input']
                var objnew_result = res.data['input1']
                console.log(objnew_result)
                setObjnew(objnew_result)
                setdataHTML(dataHTMLnew)
                axios.post(
                    "http://172.18.5.16:4000/resultBill",
                    objnew_result,
                    {
                        headers: {
                            'Access-Control-Allow-Origin': "*",
                            'Content-Type': 'application/json',
                        },
                    }
                ).then(res => {
                    console.log(res)

                }).catch(err => {
                    console.log(err);
                })
                // console.log(dataHTML)
            }).catch(err => {
                console.log(err);
            })

            // rechieveCustomer(fromvalue)





        }
        else {
            alert("Chon Hinh anh")
        }
    }
    const remove = value ? <button onClick={removeSelectedImage} style={styles.delete}> Xóa hình ảnh</button> : ""
    return (
        <div>
            <div className="row">
                {/* Area Chart */}
                <div className="col-xl-12 col-lg-12">
                    <div className="card shadow mb-4">
                        {/* Card Header - Dropdown */}
                        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary">Thêm Hóa Đơn</h6>
                        </div>

                    </div>
                </div>


            </div>
            <div className="row backgound_nen">

                <div className="col-lg-3 d-none d-lg-block  mt-left-30 mt-top-30 mt-bottom-30 " >
                    <div style={styles.container}>


                        {selectedImage && (
                            <div style={styles.preview}>
                                <img
                                    src={URL.createObjectURL(selectedImage)}
                                    style={styles.image}
                                    alt="Thumb"
                                />
                                {remove}
                            </div>
                        )}
                    </div>
                    {/* <img className='color-boximg' alt="Image" src="https://previews.123rf.com/images/dxinerz/dxinerz1504/dxinerz150400506/38621232-receipt-invoice-bill-icon-image-.jpg" /> */}
                </div>

                <div className="col-lg-8">
                    {value ? < InputReceipt imageChange={imageChange} HandleOnClick={HandleOnClick} ></InputReceipt> : <ResultDetect dataHTML={dataHTML}></ResultDetect>}


                </div>
            </div>

        </div >

    );
}

export default ListReceipt;
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
    image: { maxWidth: "100%", maxHeight: "400px" },
    delete: {
        cursor: "pointer",
        padding: 15,
        background: "red",
        color: "white",
        border: "none",
    },
};