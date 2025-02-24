import axios from 'axios'
const axiosInstance = axios.create({
    baseURL:process.env.REACT_MAIN_BACKEND
})

axiosInstance.interceptors.request.use(
    (response)=>response
)
export default axiosInstance;