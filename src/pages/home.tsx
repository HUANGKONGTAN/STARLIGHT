import { Link } from 'umi';
import styles from './home.less';

export default function Home() {
    
  const title = "为什么晚上不睡觉？"
  const article = "有人问我，为什么晚上不睡觉？我觉得这三个东西比人自由的地方，只是他们都不用当人而已，人拥有凌驾于一切生物的地位，同时也互相紧密连接，任何人都不能脱离社会做一个生物意义上的灵长目人类本身。这让人类也变成最不自由的生物。唯一需要上班，唯一需要花一生大部分时间做自己不爱做的事，无法陪伴自己最爱的人，唯一不能完全掌控自己的时间的生物。我心里的自由概念，就是可以掌握自己全部的时间。有人问我，为什么晚上不睡觉？我觉得这三个东西比人自由的地方，只是他们都不用当人而已，人拥有凌驾于一切生物的地位，同时也互相紧密连接，任何人都不能脱离社会做一个生物意义上的灵长目人类本身。这让人类也变成最不自由的生物。唯一需要上班，唯一需要花一生大部分时间做自己不爱做的事，无法陪伴自己最爱的人，唯一不能完全掌控自己的时间的生物。我心里的自由概念，就是可以掌握自己全部的时间。有人问我，为什么晚上不睡觉？我觉得这三个东西比人自由的地方，只是他们都不用当人而已，人拥有凌驾于一切生物的地位，同时也互相紧密连接，任何人都不能脱离社会做一个生物意义上的灵长目人类本身。这让人类也变成最不自由的生物。唯一需要上班，唯一需要花一生大部分时间做自己不爱做的事，无法陪伴自己最爱的人，唯一不能完全掌控自己的时间的生物。我心里的自由概念，就是可以掌握自己全部的时间。"
  const types = ['说梦','恶魔词典','社评','新鲜事'].map((e) => <div className={styles.menu} key={e}><Link to="/one">{e}</Link></div>)
  const menus = ['文字','影像','音乐'].map((e) => <div className={styles.menu} key={e}><Link to="/one">{e}</Link></div>)
  return (
    <div className={styles.body}>
      <div className={styles.leftSider}>
        {menus}
      </div>
      <div className={styles.article}>
        <div className={styles.title}>
          <p>{title}</p>
        </div>
        <div className={styles.container}>
          <h2 className={styles.footer}>{article}</h2>
        </div>
        <div className={styles.footer}>
          <h2>天之涯，海之角，今宵别梦寒</h2>
          <p>©2019-2099 NICHENG.COM 版权所有</p>
        </div>
      </div>
      <div className={styles.rightSider}>
        {types}
      </div>
      
    </div>

  );
}
