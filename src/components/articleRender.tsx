
import Article from '@/components/article';
import { getArticle } from '@/api/article'
import { useEffect, useState } from 'react'

export default function ArticleRender(props:any) {

  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");

  const [author, setAuthor] = useState("admin");

  const [readAmount, setReadAmount] = useState(0);

  const [likeAmount, setLikeAmount] = useState(0);

  const [createdAt, setCreatedAt] = useState("");

  

  let article = {
    title: title,
    content: content,
    author: author,
    readAmount: readAmount,
    likeAmount: likeAmount,
    createdAt: createdAt
  }
  
  const initArticle = (data:any, empty=false) => {
    if(!empty){
      setTitle(data.Title)
      setContent(data.Content)
      setAuthor(data.Author)
      setReadAmount(data.ReadAmount)
      setLikeAmount(data.LikeAmount)
      //日期格式的初始化应该是放在ViewModel的初始化后
      //在后端处理好返回， 前端不应该放太多的数据处理逻辑
      //暂时没找到Go Struct的初始化调用方法， 先在前端稍微处理一下算了
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
    getArticle({id: props.id}).then(response=>{
      if (typeof response === 'object' && response !== null){
        let data = (response as any).data
        if(data.data != null){
          initArticle(data.data)
        }else {
          initArticle(data.message, true)
        }
      }
      console.log(article)
    })
  },[props.id]);


  return ( 
    <div>
      <Article article={article} type={props.type}></Article>
    </div>
  );
}