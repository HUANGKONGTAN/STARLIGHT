import styles from '@/less/types.less';
import { history } from 'umi'
import React, {useEffect, useState}  from 'react'
import { getChannelList } from '@/api/article';


export default function Types() {

  const [types, setTypes] = useState([])

  // [{name:"说梦",id:1},{name:"无聊的怪事",id:2},{name:"多啦A梦",id:3},{name:"一人之下",id:4},{name:"咒术回战",id:5}]

  useEffect(() => {
    getChannelList({}).then(response=>{
      if (typeof response === 'object' && response !== null){
        let data = (response as any).data
        setTypes(data.data)
      }
    })
  }, []);

  function goType(id:number){
    history.push('aa');
  }

  return (
    <div className={styles.types}>
      <h2 className={styles.title}>频道</h2>
      { types.map((type:any, index:number) =>
        <div key={index} className={styles.type}>
          <h2 onClick={() => goType(type.id)}>#{type.Name}</h2>
          <p className={styles.describe}>{ type.Describe }</p>
        </div>
      )}
    </div>
  );
}
