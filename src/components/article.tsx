import styles from '@/less/article.less';
import { getArticleList } from '@/api/article'
import { useEffect, useState } from 'react'

export default function Article() {

  // const text = "有人问我，为什么晚上不睡觉？我觉得这三个东西比人自由的地方，只是他们都不用当人而已，人拥有凌驾于一切生物的地位，同时也互相紧密连接，任何人都不能脱离社会做一个生物意义上的灵长目人类本身。这让人类也变成最不自由的生物。唯一需要上班，唯一需要花一生大部分时间做自己不爱做的事，无法陪伴自己最爱的人，唯一不能完全掌控自己的时间的生物。我心里的自由概念，就是可以掌握自己全部的时间。有人问我，为什么晚上不睡觉？我觉得这三个东西比人自由的地方，只是他们都不用当人而已，人拥有凌驾于一切生物的地位，同时也互相紧密连接，任何人都不能脱离社会做一个生物意义上的灵长目人类本身。这让人类也变成最不自由的生物。唯一需要上班，唯一需要花一生大部分时间做自己不爱做的事，无法陪伴自己最爱的人，唯一不能完全掌控自己的时间的生物。我心里的自由概念，就是可以掌握自己全部的时间。有人问我，为什么晚上不睡觉？我觉得这三个东西比人自由的地方，只是他们都不用当人而已，人拥有凌驾于一切生物的地位，同时也互相紧密连接，任何人都不能脱离社会做一个生物意义上的灵长目人类本身。这让人类也变成最不自由的生物。唯一需要上班，唯一需要花一生大部分时间做自己不爱做的事，无法陪伴自己最爱的人，唯一不能完全掌控自己的时间的生物。我心里的自由概念，就是可以掌握自己全部的时间。"
  
  const [text, setText] = useState(0);

  useEffect(() => {
    getArticleList({
      "channel_id": 2
    }).then(response =>{
      console.log(response)
      // setText()
    })
  }, []);
  
  
  return (
    <div>
      <div className={styles.title}>
          <h1>欢迎回家</h1>
      </div>
      <div className={styles.content}>
        {text}
        {text}
        {text}
        {text}
      </div>
    </div>
  );
  
}
