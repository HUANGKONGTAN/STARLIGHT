import { fetchPost, fetchGet, fetchPut, fetchDelete } from '@/api/axios/request'

//获取音乐列表
export async function getMusicList(params:any) {
  return await fetchGet("/musics", params)
}

//获取音乐详情
export async function getMusic(params:any) {
  return await fetchGet("/music", params)
}

//获取频道列表
export async function getChannelList(params:any) {
  return await fetchGet("/channels", params)
}

//获取推送音乐
export async function getGiftMusic() {
  return await fetchGet("/music/gift")
}

//删除音乐
export async function deleteMusic(params:any) {
  return await fetchDelete("/music", params)
}

//搜索文章
export async function findMusic(params:any) {
  return await fetchDelete("/music/search", params)
}