import { getMusicList } from '@/api/music';
import styles from '@/less/music/musics.less';
import { useEffect, useState } from 'react';
import { history } from 'umi'
import { Divider, Pagination } from 'antd'

export default function ArticleList() {

  const [MusicList, setMusicList] = useState([]);

  const [total, setTotal] = useState(0);

  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    getMusicList({pageSize:5, pageNumber: pageNumber}).then(response=>{
      if (typeof response === 'object' && response !== null){
        let data = (response as any).data
        setMusicList(data.data)
        setTotal(data.total)
      }
    })
  }, []);

  const onChange = (pageNumber:number) => {
    setPageNumber(pageNumber);
    getMusicList({pageSize:5, pageNumber: pageNumber}).then(response=>{
      if (typeof response === 'object' && response !== null){
        let data = (response as any).data
        setMusicList(data.data)
        setTotal(data.total)
      }
    })
  }

  return (
    <div className={styles.musics}>
      <div className={styles.list}>
        {MusicList.map((music:any, index) => 
            <div key={index} className={styles.music}>
              <div className={styles.musicItem}>
                <div className={styles.lyric}>
                  <h2>{music.Lyric}</h2>
                </div>
                <div className={styles.info}>
                  <div className={styles.name}>
                    《{music.Name}》
                  </div>
                  <div className={styles.singer}>
                    by {music.Singer}
                  </div>
                </div>
              </div>
              <Divider />
            </div>
        )}
        <Pagination showQuickJumper total={total} onChange={onChange} />
      </div>
    </div>
    
  );
}
