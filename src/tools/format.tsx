export function formatDateOne(dateString:string, separator:string = "-"){
  let date = new Date(dateString)
  return ` ${date.getMonth()+1}${separator}${date.getDate()}${separator}${date.getFullYear()}`
}

export function formatDateTwo(dateString:string){
  let date = new Date(dateString)
  return ` ${date.getMonth()+1}月${date.getDate()}日`
}