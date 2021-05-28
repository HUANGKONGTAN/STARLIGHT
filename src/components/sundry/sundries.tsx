import { getSundryList } from '@/api/sundry';
import styles from '@/less/article/articles.less';
import { useEffect, useState } from 'react';
import { history } from 'umi'
import { formatDateTwo } from '@/tools/format';
import { Divider, Pagination } from 'antd'

export default function ArticleList() {

  const [SundryList, setSundryList] = useState([]);

  const [total, setTotal] = useState(0);

  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    getSundryList({pageSize:5, pageNumber: pageNumber}).then(response=>{
      if (typeof response === 'object' && response !== null){
        let data = (response as any).data
        setSundryList(data.data)
        setTotal(data.total)
      }
    })
  }, []);

  const goSundry = (id:string) => {
    history.push( `/sundry/${id}`);
  }

  const onChange = (pageNumber:number) => {
    setPageNumber(pageNumber);
    getSundryList({pageSize:5, pageNumber: pageNumber}).then(response=>{
      if (typeof response === 'object' && response !== null){
        let data = (response as any).data
        setSundryList(data.data)
        setTotal(data.total)
      }
    })
  }
  
  return (
    <div className={styles.articles}>
      <div className={styles.list}>
        {SundryList.map((sundry:any) => 
          <div key={sundry.ID} className={styles.article}>
            <h2 className={styles.title} onClick={() => goSundry(sundry.ID)}>{sundry.Title}</h2>
            {sundry.Author}
            {formatDateTwo(sundry.CreatedAt)}
            <Divider />
          </div>
        )}
        <Pagination showQuickJumper total={total} onChange={onChange} />
      </div>
    </div>
    
  );
}
