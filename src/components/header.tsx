import styles from '@/less/header.less';
import { Button, Input } from 'antd';
import { history } from 'umi'
import { useState, useEffect } from 'react'

export default function Header() {

  const [Active, setActive] = useState("")

  function goLogin() {
    setActive("")
    history.push('/login');
  }

  const goSearch = (value:string) => {
    history.push({
      pathname: '/search',
      query: {
        keyWord: value,
      }
    })
  }
  
  const goHome = () => {
    setActive("")
    history.push('/home');
  }

  const goAdmin = () => {
    history.push('/admin/home');
  }

  function goTab(type:string) {
    switch(type) {
      case "article": {
        setActive("article")
        history.push('/articles');
        break;
      }
      case "photo": {
        setActive("photo")
        history.push('/photos');
        break;
      }
      case "music": {
        setActive("music")
        history.push('/musics');
        break;
      }
      case "sundry": {
        setActive("sundry")
        history.push('/sundries');
        break;
      }
    }
  }

  const { Search } = Input;

  
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const IsActive = (type:string) => {
    if(Active == type){
      return styles.active
    }else {
      return null
    }
  }

  function Login() {
    if (isLoggedIn) {
      return (
        <div className={styles.Admin} onClick={()=>goAdmin()}>
          <h1 className={styles.title}>后台</h1>
        </div>
      )
    }else {
      return (
        <div className={styles.Admin} onClick={()=>goLogin()}>
          <h1 className={styles.title}>登陆</h1>
        </div>
      )
    }
  }

  const tabs = [{name:"文字", type:"article"}, {name: "影相", type:"photo"}, {name:"音乐", type:"music"}, {name:"杂物", type:"sundry"}];

  useEffect(() => {
    setIsLoggedIn(window.localStorage.getItem('username') ? true : false)
  })

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.logo} onClick={()=>goHome()}>
          <h1 className={styles.title}>星星点灯</h1>
        </div>
        <div className={styles.tabs}>
          { tabs.map((tab, index) => 
            <div className={IsActive(tab.type)}>
              <div key={index} className={styles.tab}>
                <h2 onClick={() => goTab(tab.type)}>{tab.name}</h2>
              </div>
            </div>
          )}
        </div>
        <Search
          allowClear={false}
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
