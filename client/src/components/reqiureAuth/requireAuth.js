import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

function RequireAuth({ children }) {
  const user = useSelector((state) => state.user);
  const location = useLocation();

  if (user.status === 'error') {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }
  if (user.status === 'process') {
    return <h1>Loading</h1>;
  }

  return children;
}

export default RequireAuth;
