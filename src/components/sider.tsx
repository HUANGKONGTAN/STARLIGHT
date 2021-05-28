import styles from '@/less/sider.less';
import { history } from 'umi'
import { useEffect, useState }  from 'react'
import { getChannelList } from '@/api/article';


export default function Sider(type:string) {  

  const [types, setTypes] = useState([])

  useEffect(() => {
    getChannelList(type).then(response=>{
      if (typeof response === 'object' && response !== null){
        let data = (response as any).data
        setTypes(data.data)
      }
    })
  }, [type]);

  function goType(id:number){
    history.push('aa');
  }

  return (
    <div>
      <div className={styles.sider}>
        <div className={styles.types}>
        <h2 className={styles.title}>频道</h2>
        { types.map((type:any, index:number) =>
          <div key={index} className={styles.type}>
            {/* <h2 onClick={() => goType(type.id)}>{type.Name}</h2> */}
            <h2>{type.Name}</h2>
            <p className={styles.describe}>{ type.Describe }</p>
          </div>
        )}
      </div>
      </div>
    </div>
  );
  
}
