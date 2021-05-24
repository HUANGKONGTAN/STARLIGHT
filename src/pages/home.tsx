import styles from '@/less/home.less';
import { getGiftArticle } from '@/api/article'
import  { getGiftMusic } from '@/api/music'
import {getGiftPhoto } from '@/api/photo'
import { getGiftSundry } from '@/api/sundry'
import { useEffect, useState } from 'react'
import { history } from 'umi'

export default function Home() {

  const [ArticleID, setArticleID] = useState(0)

  const [Article, setArticle] = useState("")

  const [Music, setMusic] = useState("")

  const [Photo, setPhoto] = useState("")

  const [SundryID, setSundryID] = useState(0)

  const [Sundry, setSundry] = useState("")

  useEffect(() => {
    //获取每日文章
    getGiftArticle().then(response=>{
      if (typeof response === 'object' && response !== null){
        let data = (response as any).data
        if(data.data != null){
          setArticleID(data.data.ID)
          setArticle(data.data.Title)
        }
      }
    })

    //获取每日音乐
    getGiftMusic().then(response=>{
      if (typeof response === 'object' && response !== null){
        let data = (response as any).data
        if(data.data != null){
          setMusic(data.data.Lyric)
        }
      }
    })

    //获取每日摄影
    getGiftPhoto().then(response=>{
      if (typeof response === 'object' && response !== null){
        let data = (response as any).data
        if(data.data != null){
          setPhoto(data.data.Title)
        }
      }
    })
    
    //获取每日杂项
    getGiftSundry().then(response=>{
      if (typeof response === 'object' && response !== null){
        let data = (response as any).data
        if(data.data != null){
          setSundryID(data.data.ID)
          setSundry(data.data.Title)
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
            <p>{Article}</p>
          </div>
        </div>
      </div>

      {/* 杂七杂八 */}
      <div className={styles.sundry}>
        <div className={styles.body}>
          <div className={styles.title}>
            <p>{Sundry}</p>
          </div>
        </div>
        <div className={styles.tab} onClick={()=> {goArticle(SundryID)}}>
          <p>杂七杂八</p>
        </div>
        
      </div>

      {/* 每日音乐 */}
      <div className={styles.music}>
        <div className={styles.tab} >
          <p>今日音乐</p>
        </div>
        <div className={styles.body}>
          <div className={styles.title}>
            <p>{Music}</p>
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

    </div>
  );
}