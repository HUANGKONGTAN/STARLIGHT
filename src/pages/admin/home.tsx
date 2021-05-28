import styles from '@/less/admin/home.less';
import { history } from 'umi'
function AdminHome() {

  const goNewArticle = () => {
    history.push(`/admin/article/new`);
  }

  const goUploadFile = () => {
    history.push(`/admin/photo/new`);
  }

  const goBlog = () => {
    history.push(`/photos`)
  }

  // const goNewSundry = () => {
  //   history.push(`/admin/sundry/new`);
  // }

  function goNewSundry(){
    history.push(`/admin/sundry/new`);
  }

  const gogoMusic = () => {
    history.push(`/musics`)
  }

  return ( 
    <div className={styles.home}>
      <div className={styles.Row}>
        <div className={styles.Col} onClick={goNewArticle}>
          <div className={styles.article}>
            <p>写文章</p>
          </div>
        </div>
        <div className={styles.Col} onClick={goBlog}>
          <div className={styles.photo}>
            <p>传照片</p>
          </div>
        </div>
      </div>
      <div className={styles.Row} onClick={gogoMusic}>
        <div className={styles.Col}>
          <div className={styles.music}>
            <p>发音乐</p>
          </div>
        </div>
        <div className={styles.Col} onClick={goNewSundry}>
          <div className={styles.sundry}>
            <p>倒垃圾</p>
          </div>
        </div>
      </div>
    </div>
  );
}

AdminHome.wrappers = ['@/pages/wrappers/auth']

export default AdminHome;