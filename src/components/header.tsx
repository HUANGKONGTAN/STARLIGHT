import styles from '@/less/header.less';
import { Button, Input } from 'antd';
import { history } from 'umi'
import { useState, useEffect } from 'react'

export default function Header() {

  function goLogin() {
    history.push('/login');
  }

  function goSearch() {
    history.push('/login');
  }
  
  const goHome = () => {
    history.push('/home');
  }

  const goAdmin = () => {
    history.push('/admin/home');
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

  
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  function Login() {
    if (isLoggedIn) {
      return (
        <Button type="primary" onClick={goAdmin}>
          后台
        </Button>
      )
    }
    return (
      <Button type="primary" onClick={goLogin}>
        登陆
      </Button>
    )
  }

  const tabs = [{name:"文字", type:"article"}, {name: "影相", type:"photo"}, {name:"音乐", type:"music"}, {name:"杂物", type:"sundry"}];

  useEffect(() => {
    setIsLoggedIn(window.localStorage.getItem('username') ? true : false)
    console.log(isLoggedIn)
  })

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.logo} onClick={()=>goHome()}>
          {/* <StarOutlined className={styles.logoStar} style={{ fontSize: '26px', color: 'white' }} /> */}
          <h1 className={styles.title}>星星点灯</h1>
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
          <Login />
        </div>
      </div>
    </div>
  );
}
