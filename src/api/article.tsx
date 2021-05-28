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

//搜索文章
export async function findArticle(params:any) {
  return await fetchGet("/article/search", params)
}

//写文章
export async function newArticle(params:any) {
  return await fetchPost("/article", params)
}

//更新文章
export async function updateArticle(params:any) {
  return await fetchPut("/article", params)
}

//点赞文章
export async function likeArticle(params:any) {
  return await fetchGet("/article/like", params)
}

//文章增加浏览量
export async function readArticle(params:any) {
  return await fetchGet("/article/read", params)
}
