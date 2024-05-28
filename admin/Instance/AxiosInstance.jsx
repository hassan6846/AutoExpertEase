import axios from "axios"

//AXIOS INSTANCE
const ApiInstance = axios.create({
    baseURL: 'http://localhost:4001/api',//Replace with any Current url
    header: {
        'Content-Type': 'application/json',
    },
    withCredentials: true
})

export default ApiInstance;