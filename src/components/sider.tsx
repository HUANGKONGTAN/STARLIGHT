import styles from '@/less/sider.less';
import { Anchor, Button } from 'antd'
import { LikeOutlined, MessageOutlined } from '@ant-design/icons';
import Article from '@/components/article';
import Types from '@/components/types'

export default function Sider() {  
  return (
    <div>
      <div className={styles.sider}>
        <Types></Types>
      </div>
    </div>
  );
  
}
