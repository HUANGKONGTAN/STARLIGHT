import styles from '@/less/article.less';

export default function Article(props:any) {
  return (
    <div className={styles.body}>
      <div className={styles.title}>
          <h1>{props.article.title}</h1>
      </div>
      <div className={styles.content}>
        {props.article.content}
      </div>
      <div className={styles.info}>
        {props.article.author} 作于 {props.article.createdAt}。
        <br/>
      </div>
    </div>
  );
  
}
