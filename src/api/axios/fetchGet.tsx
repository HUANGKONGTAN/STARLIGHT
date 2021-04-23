import axios from 'axios'
import qs from 'qs'

const HTTP = axios.create({
    baseURL: "/api",
    withCredentials: true,
    transformRequest:(data)=>{
        return qs.stringify(data)
    }
});

//返回一个Promise(发送post请求)
export function fetchGet(url:any, param:any) {
    return new Promise((resolve, reject) => {
        HTTP.get(url, param)
            .then(response => {
                resolve(response);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            })
    })
}
export default fetchGet;