import { Navigate, Outlet, } from 'react-router-dom';
import { useGetCurrentUserQuery } from '../../reducers/slice/users/user.slice'

const AuthenticatedRoutes = () => {
  const {data: currentUser, isLoading} = useGetCurrentUserQuery();
  if (isLoading) return;
  if (!currentUser) return <Navigate to="/login"/>
  return <Outlet /> 
}

export default AuthenticatedRoutes