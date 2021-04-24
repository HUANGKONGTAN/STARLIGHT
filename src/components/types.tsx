import styles from '@/less/types.less';
import { Button, Input } from 'antd';
import { StarOutlined } from '@ant-design/icons';
import { history } from 'umi'
import React, {useEffect}  from 'react'

export default function Types() {

  const types = [{name:"说梦",id:1},{name:"无聊的怪事",id:2},{name:"多啦A梦",id:3},{name:"一人之下",id:4},{name:"咒术回战",id:5}]

  // useEffect(()=>{
  //   const types = ["梦1","梦2","梦3","梦4","梦5"]
  // })

  function goType(id:number){
    console.log(id)
    history.push('aa');
  }

  return (
    <div className={styles.types}>
      <h2 className={styles.title}>小分类</h2>
      { types.map((type:any, index:number) =>
        <div key={type.id} className={styles.type}>
          <h2  onClick={() => goType(type.id)}>《{type.name}》</h2>
        </div>
      )}
    </div>
  );
}
