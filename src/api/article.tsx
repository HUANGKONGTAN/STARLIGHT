import { fetchPost, fetchGet, fetchPut, fetchDelete } from '@/api/axios/request'

//获取文章列表
export async function getArticleList(params:any) {
  return await fetchGet("/articles", params)
}

//获取文章详情
export async function getArticle(params:any) {
  return await fetchGet("/article", params)
}

//获取频道列表
export async function getChannelList(params:any) {
  return await fetchGet("/channels", params)
}

//获取推送文章
export async function getGiftArticle() {
  return await fetchGet("/article/gift")
}

//删除文章
export async function deleteArticle(params:any) {
  return await fetchDelete("/article", params)
}
