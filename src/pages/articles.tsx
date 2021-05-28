import ArticleList from '@/components/article/articles';
import Sider from '@/components/sider';
import styles from '@/less/article/articles.less'

export default function Articles() {
  return ( 
  <div className={styles.Page}>
    <div className={styles.List}>
      <ArticleList></ArticleList>
    </div>
    <Sider type={"article"}></Sider>
  </div>
  );
}
