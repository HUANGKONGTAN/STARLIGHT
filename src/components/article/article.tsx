import styles from '@/less/article/article.less';
import { Input, Button, message } from 'antd'
import { useEffect, useState } from 'react';
import { likeArticle, readArticle, updateArticle } from '@/api/article'
import { history  } from 'umi';

const { TextArea } = Input;

export default function Article(props:any) {

  const [title, setTitle] = useState("")

  const [content, setContent] = useState("")

  const [id, setID] = useState(0)

  const ILikeIt = () => {
    likeArticle({id:props.article.id}).then(response => {
      if((response as any).data.status === 200){
        message.success('点赞成功，感谢支持！');
      }
    })
  }

  const UpdateArticle = () => {
    updateArticle({id:id, title:title, content:content}).then(response =>{
      let data = (response as any).data
      let msg = data.message
      if(data.status === 200){
        message.success('提交成功！');  
        history.push('/admin/articles');
      }
    })
  }

  useEffect(() => {
    setID(parseInt(props.article.id))
    setTitle(props.article.title)
    setContent(props.article.content)
  }, [props.article]);

  useEffect(() => {
    if(props.type === 'show' && props.article.id !== 0){
      console.log("sss")
      readArticle({id:props.article.id})
    }
  }, [props.article.id]);
  

  if(props.type === 'show'){
    return (
      <div className={styles.body}>
        <div className={styles.title}>
            <h1>{props.article.title}</h1>
        </div>
        <div className={styles.content}>
          {props.article.content}
        </div>
        <div className={styles.info}>
          <Button type='primary' onClick={ILikeIt}>点赞</Button>
          <p>{props.article.author} 作于 {props.article.createdAt}。</p>
        </div>
      </div>
    );
  }else if (props.type === 'edit') {
    return (
      <div className={styles.body}>
        <div className={styles.title}>
            <Input 
              value={title} 
              onChange={event =>setTitle(event.target.value)}
            >
            </Input>
        </div>
        <div className={styles.content}>
          <TextArea
            value={content}
            autoSize={true}
            onChange={event =>setContent(event.target.value)}
          />
        </div>
        <div className={styles.info}>
          <Button type='primary' onClick={UpdateArticle}>保存</Button>
          <p>{props.article.author} 作于 {props.article.createdAt}。</p>
        </div>
      </div>
    );
  }
}
