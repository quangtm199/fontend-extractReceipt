import React from 'react';
import { useState } from "react";
import PropTypes from 'prop-types';
import axios from "axios";

import receiptAPI from '../../component/API/receipt'
InputReceipt.propTypes = {
    HandleOnClick: PropTypes.func.isRequired,
    imageChange: PropTypes.func.isRequired,
    remove: PropTypes.object

};


function InputReceipt(props) {
    const { HandleOnClick, imageChange, remove } = props

    const [generalreceipt, setGeneralreceipt] = useState(

        {
            id_sp: "",
            avatar: "",
            status: "notdone",
            note: "",
            time: "",
            type: "shopping",
            name: ""
        }
    );
    function s4() {
        return Math.floor((1 * Math.random()) * 0x10000).toString(16).substring(1);
    }
    function generateID() {
        var string_id = s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4()
        return string_id
    }
    function handleValueChange(e) {
        var name = e.target.name
        var value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setGeneralreceipt({ ...generalreceipt, [name]: value })

    }
    function handleImageChange(e) {
        const filename = e.target.files[0].name

        setGeneralreceipt({ ...generalreceipt, ['avatar']: filename })
        imageChange(e)

    }

    function handleSubmit(e) {
        e.preventDefault();
        if (generalreceipt['avatar'] !== "") {

            const fromvalue = {
                ...generalreceipt
            }
            var today = new Date(),
                date = today.getHours() + ':' + today.getMinutes() + '/' + today.getDate() + '/' + (today.getMonth() + 1);
            fromvalue.time = date
            var id = generateID()
            fromvalue.id_sp = id
            var imagepath = generalreceipt.avatar
            fromvalue.avatar = imagepath



            HandleOnClick(fromvalue)
        }
        else {
            HandleOnClick()
        }
    }
    return (

        <div>
            <div className="p-5">
                <div className="text-center">
                    <h1 className="h4 text-gray-700 mb-4">Thêm Hóa Đơn</h1>
                </div>
                <form className="user" onSubmit={handleSubmit} >
                    <h5> Hóa Đơn</h5>
                    <div className="form-group row">
                        <div className="col-sm-12 mb-12 mb-sm-0">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="">

                                        <input
                                            name="file"
                                            accept="image/*"
                                            type="file"
                                            onChange={handleImageChange}

                                        /></span>
                                </div>

                                <input type="text" name="name" value={generalreceipt.name} onChange={handleValueChange} placeholder="Tên Hóa Đơn" className="form-control form-control-user" />
                            </div>
                        </div>
                    </div>
                    <h5> Loại Hóa Đơn</h5>
                    <div className="form-group">

                        <select className="form-control" name="type" required="required" value={generalreceipt.type} onChange={handleValueChange} >
                            <option value="shopping"> Hóa Đơn Siêu Thị </option>
                            <option value="electronic">Hóa Đơn Điện Tử</option>
                        </select>

                        {/* <input type="email" className="form-control form-control-user" id="exampleInputEmail" placeholder="Email Address" /> */}
                    </div>
                    <h5> Note</h5>
                    <div className="form-group row">

                        <div className="col-sm-12">
                            <textarea type="textarea" className="form-control " value={generalreceipt.note} name="note" id="exampleRepeatPassword" onChange={handleValueChange} placeholder="Mô tả" />
                        </div>
                    </div>
                    <hr />

                    <div className="form-row text-center">
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary btn-user  ">Thêm Hóa Đơn</button>
                        </div>
                    </div>


                    {/* <a className="btn btn-primary btn-user btn-block">
                                Add Hoa Don
                            </a> */}


                </form>


            </div>
        </div>
    );
}

export default InputReceipt;