
import Sundry from '@/components/sundry/sundry';
import { getSundry } from '@/api/sundry'
import { useEffect, useState } from 'react'

export default function SundryRender(props:any) {

  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");

  const [author, setAuthor] = useState("admin");

  const [readAmount, setReadAmount] = useState(0);

  const [likeAmount, setLikeAmount] = useState(0);

  const [createdAt, setCreatedAt] = useState("");

  

  let sundry = {
    title: title,
    content: content,
    author: author,
    readAmount: readAmount,
    likeAmount: likeAmount,
    createdAt: createdAt
  }
  
  const initSundry = (data:any, empty=false) => {
    if(!empty){
      setTitle(data.Title)
      setContent(data.Content)
      setAuthor(data.Author)
      setReadAmount(data.ReadAmount)
      setLikeAmount(data.LikeAmount)
      let date = new Date(data.CreatedAt)
      let createdAt = `${date.getDate()}-${(date.getMonth()+1)}-${date.getFullYear()}`
      setCreatedAt(createdAt)
    }else{
      setTitle("出错啦。。。。")
      setContent(data)
      setAuthor("admin")
      setReadAmount(0)
      setLikeAmount(0)
      setCreatedAt("1970-1-1")
    }
  }

  useEffect(() => {
    console.log(props.id)
    getSundry({id: props.id}).then(response=>{
      if (typeof response === 'object' && response !== null){
        let data = (response as any).data
        if(data.data != null){
          initSundry(data.data)
        }else {
          initSundry(data.message, true)
        }
      }
      console.log(sundry)
    })
  },[props.id]);


  return ( 
    <div>
      <Sundry sundry={sundry} type={props.type}></Sundry>
    </div>
  );
}