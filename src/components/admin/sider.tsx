import styles from '@/less/admin/sider.less';
import { Button } from 'antd'
import { history } from 'umi'

export default function AdminSider() {  

  const tabs = [{name:"文字", type:"articles"}, {name: "影相", type:"photo"}, {name:"音乐", type:"music"}, {name:"杂物", type:"sundry"}];

  const goHome = () => {
    history.push('/home')
  }

  const goTab = (tab:string) => {
    history.push(`/admin/${tab}`)
  }

  return (
    <div className={styles.sider}>
      <div className={styles.tabs}>
      <Button type="primary" onClick={goHome}>回家</Button>
        { tabs.map((tab, index) => 
          <div key={tab.name} className={styles.tab}>
            <h2 onClick={()=>goTab(tab.type)}>{tab.name}</h2>
          </div>
        )}
      </div>
    </div>
  );
  
}
