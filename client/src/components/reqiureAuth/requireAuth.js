import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Loader/Loader';

function RequireAuth({ children }) {
  const user = useSelector((state) => state.user);
  const location = useLocation();

  if (user.status === 'error') {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }
  if (user.status === 'process') {
    return <Loader />;
  }

  return children;
}

export default RequireAuth;
