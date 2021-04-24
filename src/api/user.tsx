import { fetchPost, fetchGet, fetchPut, fetchDelete } from '@/api/axios/request'

// 登陆认证
export async function verifyUser(params:any) {
  return await fetchPost("/user/login", params)
}

//注册
export async function InsertUser(params:any) {
  return await fetchPost("/user", params)
}
