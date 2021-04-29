import styles from '@/less/admin/home.less';
 function AdminHome() {
  return ( 
    <div className={styles.home}>
        <h1>管理员首页</h1>
    </div>
  );
}

AdminHome.wrappers = ['@/pages/wrappers/auth']

export default AdminHome;