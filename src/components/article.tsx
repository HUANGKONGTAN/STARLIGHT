import styles from '@/less/article.less';
import { Input, Button, message } from 'antd'
import { useEffect, useState } from 'react';

const { TextArea } = Input;

export default function Article(props:any) {

  const [title, setTitle] = useState("")

  const [content, setContent] = useState("")

  const ILikeIt = () => {
    message.success('点赞成功，感谢支持！');
  }

  useEffect(() => {
    setTitle(props.article.title)
    setContent(props.article.content)
  });

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
          <Button type='primary' onClick={()=> ILikeIt()}>点赞</Button>
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
          <Button type='primary'>保存</Button>
          <p>{props.article.author} 作于 {props.article.createdAt}。</p>
        </div>
      </div>
    );
  }
}
