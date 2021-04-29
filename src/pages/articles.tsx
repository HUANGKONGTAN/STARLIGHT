import { Link } from 'umi';
import styles from '@/less/articles.less';
import ArticleList from '@/components/articles';
import { PageHeader } from 'antd'

export default function Articles() {
  return ( 
  <div>
    <ArticleList></ArticleList>
  </div>
  );
}
