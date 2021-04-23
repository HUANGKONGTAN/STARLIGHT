import { fetchPost, fetchGet, fetchPut, fetchDelete } from '@/api/axios/request'

//获取文章列表
export async function getArticleList(params:any) {
  return await fetchGet("/articles", params)
}

//获取文章
export async function getRegister(params:any) {
  return await fetchPost("/user/register", params)
}