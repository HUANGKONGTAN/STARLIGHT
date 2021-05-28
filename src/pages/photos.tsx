import { useEffect, useState } from 'react';
import { Image } from 'antd';
import styles from '@/less/photos.less'
import { getPhotoList } from '@/api/photo';

export default function Photos() {

  const [imageList, setImageList] = useState([])

  useEffect(() => {
    getPhotoList({}).then(response => {
      let data = (response as any).data
      setImageList(data.data)
    })
  }, [])

  const preLoad = () => {
    
  }

  function ImagesRender(){
    return (
      <div className={styles.list}>
      {imageList.map((image:any) => 
          <div className={styles.listItem} key={image.ID}>
            <Image
              width={150}
              placeholder
              alt={image.Title}
              src={"https://wx1.sinaimg.cn/mw2000/"+image.FileName}
            />
          </div>
        )}
    </div>
    )
    
  }

  return (
    <>
      <ImagesRender/>
    </>
  );
};
