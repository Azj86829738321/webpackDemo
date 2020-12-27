import axios from 'axios';

//基本配置
const Util = {
    imgPath:'http://127.0.0.1:8021/img/',
    apiPath:'http://127.0.0.1:8020/'
}

Util.ajax =axios.create({
    baseURL:Util.apiPath
})

Util.ajax.interceptors.response.use(res =>{
    return res.data;
})

export default Util;
