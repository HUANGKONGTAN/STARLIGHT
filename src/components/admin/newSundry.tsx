import { newSundry } from '@/api/sundry';
import styles from '@/less/sundry/sundry.less'
import { Input, Button, message } from 'antd'
import { useState } from 'react';
import { history } from 'umi'

const { TextArea } = Input;

export default function NewSundry() {

  const [title, setTitle] = useState("")

  const [content, setContent] = useState("")

  const goSubmit = () => {
    newSundry({title:title, content:content}).then(response =>{
      let data = (response as any).data
      let msg = data.message
      if(data.status === 200){
        message.success('提交成功！');  
        history.push('/home');
      }
    })
  }

  return(
    <div className={styles.body}>
      <div className={styles.title}>
          <Input placeholder="题目"
          onChange={event =>setTitle(event.target.value)}
          ></Input>
      </div>
      <div className={styles.content}>
        <TextArea
          autoSize={{ minRows: 10 }}
          placeholder="Balabala.......s"
          onChange={event =>setContent(event.target.value)}
        />
      </div>
      <div className={styles.info}>
        <Button type='primary' onClick={goSubmit}>保存</Button>
      </div>
    </div>
  )
}
