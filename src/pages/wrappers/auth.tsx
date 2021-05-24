import { getAuth } from '@/api/user';
import { Redirect } from 'umi'

export default (props:any) => {

  const { isLogin } = useAuth();

  
  if (isLogin) {
    return <div>{ props.children }</div>;
  } else {
    return <Redirect to="/login" />;
  }
}

function useAuth(): { isLogin: any; } {
  let authCode = window.localStorage.getItem('username') ? true : false;
  return { isLogin: authCode }
}
