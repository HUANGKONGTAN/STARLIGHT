import styles from '@/less/index.less';
import Header from '@/components/header'
import Sider from '@/components/sider';

function BasicLayout(props:any) {

  const routes = ['/login', '/register']

  if(!routes.includes(props.location.pathname)) {
    return (
      <div>
        <div className={styles.layout}>
          <Header></Header>
          <div className={styles.body}>
            <div className={styles.content}>
              {props.children}
            </div>
            <Sider></Sider>
          </div>
          <div className={styles.footer}>
            <h2>天之涯，海之角，今宵别梦寒</h2>
            <p>©2019-2099 NICHENG.COM 版权所有</p>
          </div>
        </div>
      </div>
    );
  } else {
    return(
      <div className={styles.login}>
        {props.children}
      </div>
    )
  }
}

export default BasicLayout;

