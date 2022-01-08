import http from "./apiCaller"
import authHeader from '../../service/auth-header'

let token = authHeader()

const createBill = async (data) => {

    return await http.post(`/api/bills`, data,
        {
            headers:
                token
        }
    )
}
const receiptAPI = async (data) => {

    return await http.post(`/api/bills`, data,
        {
            headers:
                token
        }
    )
}

export default
    {
        createBill
    }