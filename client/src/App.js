import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
import { useEffect } from 'react';
import Auth from './components/Auth/Auth';
import MainPage from './components/MainPage/MainPage';
import './App.css';

import { checkUser } from './redux/actions/userAC';
import RequireAuth from './components/reqiureAuth/requireAuth';
import DirectorPage from './components/DirectorPage/DirectorPage';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUser());
  }, []);
  // const user = useSelector((state) => state.user);
  return (
    <div>
      <Routes>
        <Route
          path="*"
          element={(
            <RequireAuth>
              <MainPage />
            </RequireAuth>
          )}
        />
        <Route path="/auth" element={<Auth />} />
        <Route path="/boss" element={<DirectorPage />} />
      </Routes>
    </div>
  );
}

export default App;
