import NewArticle from '@/components/admin/newArticle';
import ArticleRender from '@/components/articleRender';

function AdminAddArticles() {
  return(
    <div>
      <NewArticle></NewArticle>
    </div>
  )
}

AdminAddArticles.wrappers = ['@/pages/wrappers/auth']

export default AdminAddArticles
