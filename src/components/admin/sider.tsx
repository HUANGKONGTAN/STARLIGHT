import styles from '@/less/admin/sider.less';
import { Button } from 'antd'
import { history } from 'umi'

export default function AdminSider() {  

  const tabs = [{name:"家", type:"home"}, {name:"文字", type:"articles"}, {name: "影相", type:"photos"}, {name:"音乐", type:"musics"}, {name:"杂物", type:"sundries"}];

  const goHome = () => {
    history.push('/home')
  }

  const goTab = (tab:string) => {
    history.push(`/admin/${tab}`)
  }

  return (
    <div className={styles.sider}>
      <div className={styles.tabs}>
      <div className={styles.logo} onClick={goHome}>
        <p>星星</p>
        <p>点灯</p>
      </div>
        { tabs.map((tab) => 
          <div key={tab.name} className={styles.tab}>
            <h2 onClick={()=>goTab(tab.type)}>{tab.name}</h2>
          </div>
        )}
      </div>
    </div>
  );
  
}
