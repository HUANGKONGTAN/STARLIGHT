import { fetchPost, fetchGet, fetchPut, fetchDelete } from '@/api/axios/request'

//获取文章列表
export async function getArticleList(params:any) {
  return await fetchGet("/articles", params)
}

//获取频道列表
export async function getChannelList(params:any) {
  return await fetchGet("/channels", params)
}