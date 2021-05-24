import styles from '@/less/index.less';
import adminStyles from '@/less/admin/index.less';
import Header from '@/components/header'
import AdminSider from '@/components/admin/sider'
import { Divider } from 'antd';
import { history } from 'umi'

function BasicLayout(props:any) {

  const routes = ['/login', '/register']

  const AdminRoutes = '/admin'

  const goHome = () => {
    history.push('/home')
  }

  if(props.location.pathname.includes(AdminRoutes)){
    return (
      <>
        <div className={adminStyles.adminLayout}>
          <AdminSider></AdminSider>
          <div className={adminStyles.body}>
            <Divider/>
            <h1 className={adminStyles.titleTwo}>这个熵不断自增的世界需要有人来努力降低一些熵。</h1>
            <Divider/>
            {props.children}
          </div>
        </div>
        <Divider/>
        <div className={styles.footer}>
            <h2>天之涯，海之角，今宵别梦寒</h2>
            <p>©2019-2099 NICHENG.COM 版权所有</p>
          </div>
      </>
    )
  }else if(!routes.includes(props.location.pathname)) {
    return (
      <div>
        <div className={styles.layout}>
          <Header></Header>
          <div className={styles.body}>
            {props.children}
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

