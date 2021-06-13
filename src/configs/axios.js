import axios from 'axios'

const headers = {
    // 'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': `${process.env.REACT_APP_URI}`,
}
const instance = axios.create({
    baseURL: process.env.REACT_APP_URI,
    headers:headers,
})

// For accesing straight to 'data'
// instance.interceptors.response.use((response)=>response.data)

export default instance

