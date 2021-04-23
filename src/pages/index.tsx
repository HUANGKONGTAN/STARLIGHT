import styles from '@/less/index.less';
import Header from '@/components/header'
import Sider from '@/components/sider';
import Menu from '@/components/menu'
import Body from '@/components/body'

export default function IndexPage() {
  return (
    <div className={styles.layout}>
      <Header></Header>
      <div className={styles.body}>
        <Body></Body>
        <Sider></Sider>
      </div>
      <Menu></Menu>
    </div>
  );
}
