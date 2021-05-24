import axios from 'axios'

const HTTP = axios.create({
    baseURL: "/api",
    withCredentials: true,
});

//返回一个Promise(发送get请求)
export function fetchGet(url:string, params:any = {}) {
  return new Promise((resolve, reject) => {
      HTTP.get(url, {
        params: params
      }).then(response => {
        resolve(response);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function fetchPost(url:string, params:any) {
  return new Promise((resolve, reject) => {
      HTTP.post(url, params).then(response => {
        resolve(response);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function fetchPut(url:string, params:any) {
  return new Promise((resolve, reject) => {
      HTTP.put(url, {
        params: params
      }).then(response => {
        resolve(response);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function fetchDelete(url:string, params:any) {
  return new Promise((resolve, reject) => {
      HTTP.delete(url, {
        params: params
      }).then(response => {
        resolve(response);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}


