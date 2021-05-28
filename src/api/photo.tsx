import { fetchPost, fetchGet, fetchPut, fetchDelete } from '@/api/axios/request'

//获取影相列表
export async function getPhotoList(params:any) {
  return await fetchGet("/photos", params)
}

//获取影相详情
export async function getPhoto(params:any) {
  return await fetchGet("/photo", params)
}

//获取推送影相
export async function getGiftPhoto() {
  return await fetchGet("/photo/gift")
}

//删除影相
export async function deletePhoto(params:any) {
  return await fetchDelete("/photo", params)
}

//搜索文章
export async function findPhoto(params:any) {
  return await fetchDelete("/photo/search", params)
}