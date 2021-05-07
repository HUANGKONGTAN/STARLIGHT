import UploadFile from '@/components/admin/UploadFile';

function AdminUploadFile() {
  return(
    <div>
      <UploadFile></UploadFile>
    </div>
  )
}

AdminUploadFile.wrappers = ['@/pages/wrappers/auth']

export default AdminUploadFile
