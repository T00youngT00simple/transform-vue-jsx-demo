import axios from 'axios'


let baseUrl = 'http://192.168.1.30:8000';
// 创建axios实例
const service = axios.create({
    baseURL: baseUrl, // api的base_url
    withCredentials: true, // 允许携带cookie
    timeout: 50000, // 请求超时时间 
})

// request拦截器
service.interceptors.request.use(config => {

    if (sessionStorage.token) {
        // config.headers['X-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
        config.headers.Token = `${sessionStorage.token}`;
    }
    return config
}, error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
    response => {

        if (response.status == 200) {
            return Promise.resolve(response.data)
        } 
        // if(response.code == 1){
        // }
    },
    function(error){
        console.log(error);
    },

)

export default service
