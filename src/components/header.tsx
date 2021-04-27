import styles from '@/less/header.less';
import { Button, Input } from 'antd';
import { StarOutlined } from '@ant-design/icons';
import { history } from 'umi'

export default function Header() {

  function goLogin() {
    history.push('/login');
  }

  function goSearch() {
    history.push('/login');
  }

  function goTab(type:string) {
    switch(type) {
      case "article": {
        history.push('/articles');
        break;
      }
      case "photo": {
        history.push('/photoList');
        break;
      }
      case "music": {
        history.push('/musicList');
        break;
      }
      case "sundry": {
        history.push('/sundryList');
        break;
      }
    }
  }

  const { Search } = Input;

  const tabs = [{name:"文字", type:"article"}, {name: "影相", type:"photo"}, {name:"音乐", type:"music"}, {name:"杂物", type:"sundry"}];

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.logo}>
          {/* <img className={styles.logoImg} src={require('@/static/img/psb.jpeg')}></img> */}
          <StarOutlined className={styles.logoStar} style={{ fontSize: '26px', color: 'white' }} />
          <h1 className={styles.logoFont}>星星点灯</h1>
        </div>
        <div className={styles.tabs}>
          { tabs.map((tab, index) => 
            <div key={tab.name} className={styles.tab}>
              <h2  onClick={() => goTab(tab.type)}>{tab.name}</h2>
            </div>
          )}
        </div>
        <Search
          allowClear
          enterButton="搜"
          size="middle"
          onSearch={goSearch}
          className={styles.search}
        />
        <div className={styles.login}>
          <Button type="primary" onClick={goLogin}>
            登陆
          </Button>
        </div>
      </div>
    </div>
  );
}
