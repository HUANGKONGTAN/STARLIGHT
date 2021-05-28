import NewSundry from '@/components/admin/newSundry';

function AdminAddSundries() {
  return(
    <div>
      <NewSundry></NewSundry>
    </div>
  )
}

AdminAddSundries.wrappers = ['@/pages/wrappers/auth']

export default AdminAddSundries
