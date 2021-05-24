import ArticleList from '@/components/article/articles';
import Sider from '@/components/sider';
import styles from '@/less/article/articles.less'

export default function Articles() {
  return ( 
  <div className={styles.articlePage}>
    <div className={styles.articleList}>
      <ArticleList></ArticleList>
    </div>
    <Sider></Sider>
  </div>
  );
}
