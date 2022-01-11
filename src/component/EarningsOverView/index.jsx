import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RevenueSoureces from '../Revenue Sources';
import Report from '../report';
import Overview from '../Dashboard/Overview';
import axios from "axios";
import Sobill from './Sobill';

EarningsOverView.propTypes = {

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
function EarningsOverView(props) {
    const [bill, setBill] = useState([]);
    const [billdetail, setBilldetail] = useState([]);
    const [erner, setErner] = useState({ "annual": 0, 'length': 0 });
    const [ernermonth, setErnermonth] = useState({ "monthly": 0, "length_month": 0, "list_not_done": 0, "allBill": 0 });
    // const [products, setproducts] = useState([
    // ]);
    useEffect(() => {

        rechieveCustomer();



    }, []);
    const rechieveCustomer = async () => {

        await getAllBill().then(res => {
            var total = 0
            var id = 0

            setBilldetail(res.data)

            for (var i = 0; i < res.data.length; i++) {
                // console.log(parseInt(res.data[i]['totalcost'].replace(",","").replace(".","")))
                if (res.data[i]['totalcost']) {
                    var converint = res.data[i]['totalcost'].replace(",", "").replace(".", "")
                    total = total + parseInt(converint)
                }
                var id = i

                // setErner(...erner,['length'], i)
            }
            setErner({ ...erner, ['length']: id, ['annual']: total })
            // console.log(erner)

            // console.log(billdetail)

        }
        )
        await getAlluser().then(res => {
            var totalmonth = 0
            var idmonth = 0
            var today = new Date()
            var month123 = today.getMonth() + 1
            var list_not_done = 0
            for (var i_u = 0; i_u < res.data.length; i_u++) {
                var status = res.data[i_u]['status']
                if (status == "notdone") {
                    list_not_done = list_not_done + 1
                }

                var month = res.data[i_u]['time'].split("/")
                console.log("month", month[2])
                console.log(month123)
                if (month[2] == month123) {
                    console.log("billdetail", billdetail)
                    console.log("i_u", i_u)
                    if (billdetail[i_u]) {
                        console.log("Asd", billdetail[i_u])
                        if (billdetail[i_u]['totalcost']) {
                            var converint = billdetail[i_u]['totalcost'].replace(",", "").replace(".", "")
                            totalmonth = totalmonth + parseInt(converint)

                            idmonth = idmonth + 1
                        }
                    }
                    setErnermonth({ ...ernermonth, 'allBill': i_u + 1, 'length_month': idmonth, ['monthly']: totalmonth, "list_not_done": list_not_done })
                }

                // console.log(res.data)
                // console.log(ernermonth)
            }


        })


    }



    return (
        <div>
            <Report></Report>

            <Sobill erner={erner} ernermonth={ernermonth} />

            <Overview></Overview>
        </div>
    );
}

export default EarningsOverView;