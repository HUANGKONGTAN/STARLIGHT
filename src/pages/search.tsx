import { useEffect, useState } from 'react';
import { Divider } from 'antd';
import { history } from 'umi';
import { findArticle } from '@/api/article'
import { findSundry } from '@/api/sundry'
import { formatDateTwo } from '@/tools/format';
import styles from '@/less/search.less'

export default function SearchReasult() {

  const [articleList, setArticleList] = useState([])

  const [sundryList, setSundryList] = useState([])

  const goArticle = (id:string) => {
    history.push( `/article/${id}`);
  }

  const goSundry = (id:string) => {
    history.push( `/sundry/${id}`);
  }

  useEffect(() => {
    let keyWord = (history.location.query as any).keyWord

    //搜索关键字匹配的文章
    findArticle({keyWord:keyWord}).then(response => {
      if (typeof response === 'object' && response !== null){
        let data = (response as any).data
        setArticleList(data.data)
      }
    })
    
    //搜索关键字匹配的杂项
    findSundry({keyWord:keyWord}).then(response => {
      if (typeof response === 'object' && response !== null){
        let data = (response as any).data
        setSundryList(data.data)
      }
    })
  }, [(history.location.query as any).keyWord])

  function ArticleResult(){
    return articleList === null || articleList.length === 0 ? <div className={styles.none}>暂无相关内容</div> :
    <div className={styles.list}>
      {articleList.map((article:any) => 
          <div className={styles.listItem} key={article.ID}>
            <h2 onClick={() => goArticle(article.ID)}>{article.Title}</h2>
            {article.Author}
            {formatDateTwo(article.CreatedAt)}
            <Divider />
          </div>
        )}
    </div>
  }

  function SundryResult(){
    return sundryList === null || sundryList.length === 0 ? <div className={styles.none}>暂无相关内容</div> :
    <div className={styles.list}>
      {sundryList.map((sundry:any) => 
        <div className={styles.listItem} key={sundry.ID}>
          <h2 onClick={() => goSundry(sundry.ID)}>{sundry.Title}</h2>
          {sundry.Author}
          {formatDateTwo(sundry.CreatedAt)}
          <Divider />
        </div>
      )}
    </div>
  }

  return (
    <>
    <div className={styles.result}>
      <div className={styles.article}>
        <div className={styles.title}>
          文章搜索列表
        </div>
        <div className={styles.content}>
          <ArticleResult/>
        </div>
      </div>
      <div className={styles.sundry}>
        <div className={styles.title}>
          杂项搜索结果
        </div>
        <div className={styles.content}>
          <SundryResult/>
        </div>
      </div>
    </div>
      
    </>
  );
};
