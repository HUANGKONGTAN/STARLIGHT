import ArticleRender from '@/components/article/articleRender';

export default function ArticlePage(props:any) {
  return ( 
    <div>
      <ArticleRender id={props.match.params.id} type={"show"}></ArticleRender>
    </div>
  );
  
}

ArticlePage.wrappers = ['@/wrappers/auth']
