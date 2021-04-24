import { Link } from 'umi';
import styles from '@/less/articles.less';
import ArticleList from '@/components/articles';

export default function Home() {
  return ( 
  <div>
      <ArticleList></ArticleList>
  </div>
  );
}
