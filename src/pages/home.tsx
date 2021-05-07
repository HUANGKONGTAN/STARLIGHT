import styles from '@/less/home.less';
import { getGiftArticle } from '@/api/article'
import { useEffect, useState } from 'react'
import { history } from 'umi'

export default function Home() {

  const [ArticleID, setArticleID] = useState(0)

  const [ArticleTitle, setArticleTitle] = useState("")

  useEffect(() => {
    getGiftArticle().then(response=>{
      if (typeof response === 'object' && response !== null){
        let data = (response as any).data
        if(data.data != null){
          setArticleID(data.data.ID)
          setArticleTitle(data.data.Title)
        }
      }
    })
  }, []);

  const goArticle = (id:number) => {
    history.push(`/article/${id}`)
  }

  return ( 
    <div className={styles.home}>
      {/* <ArticleRender id={ArticleID} type={'show'}></ArticleRender> */}
      <div className={styles.welcome}>
        <h1> 欢迎回家。</h1>
      </div>

      {/* 每日文章 */}
      <div className={styles.article} onClick={()=> {goArticle(ArticleID)}}>
        <div className={styles.tab} >
          <p>今日文章</p>
        </div>
        <div className={styles.body}>
          <div className={styles.title}>
            <p>{ArticleTitle}</p>
          </div>
        </div>
      </div>

      {/* 每日摄影 */}
      <div className={styles.photo}>
        <div className={styles.tab} >
          <p>今日摄影</p>
        </div>
        <div className={styles.body}>
          <img className={styles.img} src={require('@/static/img/psb.jpeg')}/>  
        </div>
      </div>

      {/* 每日音乐 */}
      <div className={styles.music} onClick={()=> {goArticle(ArticleID)}}>
        <div className={styles.tab} >
          <p>今日音乐</p>
        </div>
        <div className={styles.body}>
          <div className={styles.title}>
            <p>{ArticleTitle}</p>
          </div>
        </div>
      </div>

      {/* 杂七杂八 */}
      <div className={styles.gift}>
        <div className={styles.sundryTab} onClick={()=> {goArticle(ArticleID)}}>
          <p>杂七杂八</p>
        </div>
        <div className={styles.body}>
          <div className={styles.title}>
            <p>{ArticleTitle}</p>
          </div>
        </div>
      </div>

    </div>
  );
}