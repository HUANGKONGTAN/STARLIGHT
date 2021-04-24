import { getArticleList } from '@/api/article';
import styles from '@/less/articles.less';
import { useEffect, useState } from 'react';
import { history } from 'umi'

export default function ArticleList() {

  const [ArticleList, setArticleList] = useState([]);

  const [total, setTotal] = useState(0)

  useEffect(() => {
    getArticleList({}).then(response=>{
      if (typeof response === 'object' && response !== null){
        let data = (response as any).data
        setArticleList(data.data)
        setTotal(data.total)
      }
    })
  }, []);

  // const goArticle = (id:int) => {
  //   history.push('/login');
  // }
  
  // onClick={() => goArticle(article.id)}
  return (
    <div className={styles.list}>
      {total}
      {ArticleList.map((article:any) => 
        <div key={article.Title} className={styles.article}>
          <h2 >{article.Title}</h2>
        </div>
      )}
    </div>
  );
}
