import { fetchPost, fetchGet, fetchPut, fetchDelete } from '@/api/axios/request'

//获取杂项列表
export async function getSundryList(params:any) {
  return await fetchGet("/sundries", params)
}

//获取杂项详情
export async function getSundry(params:any) {
  return await fetchGet("/sundry", params)
}

//获取频道列表
export async function getChannelList(params:any) {
  return await fetchGet("/channels", params)
}

//获取推送杂项
export async function getGiftSundry() {
  return await fetchGet("/sundry/gift")
}

//删除杂项
export async function deleteSundry(params:any) {
  return await fetchDelete("/sundry", params)
}

//搜索杂项
export async function findSundry(params:any) {
  return await fetchGet("/sundry/search", params)
}
