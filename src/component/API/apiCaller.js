import axios from 'axios'
import auHeader from '../../service/auth-header'
let token = auHeader()

const http = axios.create({
    baseURL: ' http://localhost:8080',
    headers: token


});
export default http