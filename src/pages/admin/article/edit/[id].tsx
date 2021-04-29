import ArticleRender from '@/components/articleRender';

function AdminEditArticles(props:any) {
  return(
  <div>
    <ArticleRender id={props.match.params.id} type={"edit"}></ArticleRender>
  </div>
  )
}

AdminEditArticles.wrappers = ['@/pages/wrappers/auth']

export default AdminEditArticles
