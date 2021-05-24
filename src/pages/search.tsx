import styles from '@/less/login.less';
import { useEffect, useState } from 'react';
import { Divider } from 'antd';
import { history } from 'umi';
import { findArticle } from '@/api/article'
import { findSundry } from '@/api/sundry'
import { formatDateTwo } from '@/tools/format';

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
    console.log(articleList)
    return articleList === null || articleList.length === 0 ? <div>"没找到哦。。。" </div> :
    <div className={styles.list}>
      {articleList.map((article:any) => 
          <div key={article.ID} className={styles.article}>
            <h2 className={styles.title} onClick={() => goArticle(article.ID)}>{article.Title}</h2>
            {article.Author}
            {formatDateTwo(article.CreatedAt)}
            <Divider />
          </div>
        )}
    </div>
  }

  function SundryResult(){
    console.log(sundryList)
    return sundryList === null || sundryList.length === 0 ? <div>"没找到哦。。。" </div> :
    <div className={styles.list}>
      {sundryList.map((sundry:any) => 
        <div key={sundry.ID} className={styles.article}>
          <h2 className={styles.title} onClick={() => goSundry(sundry.ID)}>{sundry.Title}</h2>
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
        {/* <div className={styles.list}>
          {articleList.map((article:any) => 
              <div key={article.ID} className={styles.article}>
                <h2 className={styles.title} onClick={() => goArticle(article.ID)}>{article.Title}</h2>
                {article.Author}
                {formatDateTwo(article.CreatedAt)}
                <Divider />
              </div>
            )}
        </div> */}
        <ArticleResult/>
      </div>
      <div className={styles.sundry}>
        <div className={styles.title}>
          杂项搜索结果
        </div>
        {/* <div className={styles.list}>
          {sundryList.map((sundry:any) => 
              <div key={sundry.ID} className={styles.article}>
                <h2 className={styles.title} onClick={() => goSundry(sundry.ID)}>{sundry.Title}</h2>
                {sundry.Author}
                {formatDateTwo(sundry.CreatedAt)}
                <Divider />
              </div>
            )}
        </div> */}
        <SundryResult/>
      </div>
    </div>
      
    </>
  );
};
