import styles from '@/less/body.less';
import { Button } from 'antd';
import { StarOutlined } from '@ant-design/icons';
import { history } from 'umi'
import Article from './article';

export default function Body() {

  return (
    <div className={styles.body}>
      <Article></Article>
    </div>
  );
}
