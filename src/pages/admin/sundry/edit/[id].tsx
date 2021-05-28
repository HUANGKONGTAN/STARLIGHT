import SundryRender from '@/components/sundry/SundryRender';

function AdminEditSundries(props:any) {
  return(
  <div>
    <SundryRender id={props.match.params.id} type={"edit"}></SundryRender>
  </div>
  )
}

AdminEditSundries.wrappers = ['@/pages/wrappers/auth']

export default AdminEditSundries
