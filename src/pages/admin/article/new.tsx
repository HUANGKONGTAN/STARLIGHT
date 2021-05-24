import NewArticle from '@/components/admin/newArticle';
import ArticleRender from '@/components/article/articleRender';

function AdminAddArticles() {
  return(
    <div>
      <NewArticle></NewArticle>
    </div>
  )
}

AdminAddArticles.wrappers = ['@/pages/wrappers/auth']

export default AdminAddArticles
