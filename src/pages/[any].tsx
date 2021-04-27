import styles from '@/less/404.less';

(NoFoundPage as any).path = undefined;

export default function NoFoundPage() {
  return ( 
  <div className={styles.title}>
      <h1>路径不对吧兄弟。。。。。</h1>
  </div>

  );
}
