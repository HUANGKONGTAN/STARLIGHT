import styles from '@/less/sundry/sundry.less';
import { Input, Button, message } from 'antd'
import { useEffect, useState } from 'react';
import { likeSundry, readSundry, updateSundry } from '@/api/sundry'
import { history  } from 'umi';

const { TextArea } = Input;

export default function Sundry(props:any) {

  const [title, setTitle] = useState("")

  const [content, setContent] = useState("")

  const [id, setID] = useState(0)

  const ILikeIt = () => {
    likeSundry({id:props.sundry.id}).then(response => {
      if((response as any).data.status === 200){
        message.success('点赞成功，感谢支持！');
      }
    })
  }

  const UpdateSundry = () => {
    updateSundry({id:id, title:title, content:content}).then(response =>{
      let data = (response as any).data
      let msg = data.message
      if(data.status === 200){
        message.success('提交成功！');  
        history.push('/admin/sundries');
      }
    })
  }

  useEffect(() => {
    setID(parseInt(props.sundry.id))
    setTitle(props.sundry.title)
    setContent(props.sundry.content)
  }, [props.sundry]);

  useEffect(() => {
    if(props.type === 'show' && props.sundry.id !== 0){
      console.log("sss")
      readSundry({id:props.sundry.id})
    }
  }, [props.sundry.id]);
  

  if(props.type === 'show'){
    return (
      <div className={styles.body}>
        <div className={styles.title}>
            <h1>{props.sundry.title}</h1>
        </div>
        <div className={styles.content}>
          {props.sundry.content}
        </div>
        <div className={styles.info}>
          <Button type='primary' onClick={ILikeIt}>点赞</Button>
          <p>{props.sundry.author} 作于 {props.sundry.createdAt}。</p>
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
          <Button type='primary' onClick={UpdateSundry}>保存</Button>
          <p>{props.sundry.author} 作于 {props.sundry.createdAt}。</p>
        </div>
      </div>
    );
  }
}
