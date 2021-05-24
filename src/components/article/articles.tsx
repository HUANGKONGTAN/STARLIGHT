import { getArticleList } from '@/api/article';
import styles from '@/less/article/articles.less';
import { useEffect, useState } from 'react';
import { history } from 'umi'
import { Divider, Pagination } from 'antd'
import { formatDateTwo } from '@/tools/format';

export default function ArticleList() {

  const [ArticleList, setArticleList] = useState([]);

  const [total, setTotal] = useState(0);

  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    getArticleList({pageSize:5, pageNumber: pageNumber}).then(response=>{
      if (typeof response === 'object' && response !== null){
        let data = (response as any).data
        setArticleList(data.data)
        setTotal(data.total)
      }
    })
  }, []);

  const goArticle = (id:string) => {
    history.push( `/article/${id}`);
  }

  const onChange = (pageNumber:number) => {
    setPageNumber(pageNumber);
    getArticleList({pageSize:5, pageNumber: pageNumber}).then(response=>{
      if (typeof response === 'object' && response !== null){
        let data = (response as any).data
        setArticleList(data.data)
        setTotal(data.total)
      }
    })
  }

  
  
  return (
    <div className={styles.articles}>
      <div className={styles.list}>
        {ArticleList.map((article:any) => 
          <div key={article.ID} className={styles.article}>
            <h2 className={styles.title} 
              onClick={() => goArticle(article.ID)}>{article.Title}
              <span className={styles.info}>
                {article.Author}{formatDateTwo(article.CreatedAt)}作
              </span>
            </h2>
            <Divider />
          </div>
        )}
        <Pagination showQuickJumper total={total} onChange={onChange} />
      </div>
    </div>
    
  );
}
