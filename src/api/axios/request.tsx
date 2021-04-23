import axios from 'axios'
import qs from 'qs'

const HTTP = axios.create({
    baseURL: "http://localhost:8888/api",
    withCredentials: true,
    transformRequest:(data)=>{
        return qs.stringify(data)
    }
});

//返回一个Promise(发送get请求)
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

//返回一个Promise(发送post请求)
export function fetchPost(url:any, param:any) {
    return new Promise((resolve, reject) => {
        HTTP.post(url, param)
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

//返回一个Promise(发送put请求)
export function fetchPut(url:any, param:any) {
  return new Promise((resolve, reject) => {
      HTTP.put(url, param)
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

//返回一个Promise(发送delete请求)
export function fetchDelete(url:any, param:any) {
  return new Promise((resolve, reject) => {
      HTTP.delete(url, param)
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