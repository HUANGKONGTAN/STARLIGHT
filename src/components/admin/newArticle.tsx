import styles from '@/less/article/article.less'
import { Input, Button } from 'antd'

const { TextArea } = Input;

export default function NewArticle() {
  return(
    <div className={styles.body}>
      <div className={styles.title}>
          <Input placeholder="题目"></Input>
      </div>
      <div className={styles.content}>
        <TextArea
          autoSize={{ minRows: 10 }}
          placeholder="Balabala.......s"
        />
      </div>
      <div className={styles.info}>
        <Button type='primary'>保存</Button>
      </div>
    </div>
  )
}
