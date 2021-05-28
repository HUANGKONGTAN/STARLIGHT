import SundryList from '@/components/sundry/sundries';
import Sider from '@/components/sider';
// import styles from '@/less/sundry/sundries.less'
import styles from '@/less/article/articles.less'

export default function Sundries() {
  return ( 
    <div className={styles.Page}>
      <div className={styles.List}>
        <SundryList></SundryList>
      </div>
      <Sider type={"sundry"}></Sider>
    </div>
  );
}
