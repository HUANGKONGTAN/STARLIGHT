import styles from '@/less/article.less';
import { getArticleList } from '@/api/article'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Article() {

  const [text, setText] = useState("");

  return (
    <div>
      <div className={styles.title}>
          <h1>欢迎回家</h1>
      </div>
      <div className={styles.content}>
        {text}
      </div>
    </div>
  );
  
}
