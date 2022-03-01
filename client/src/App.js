import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
import Auth from './components/Auth/Auth';
import MainPage from './components/MainPage/MainPage';
// import UserPage from './components/UserPage/UserPage';

function App() {
  const user = useSelector((state) => state.user);
  // useEffect(() => {
  // });
  return (
    <div>
      <Routes>
        <Route path="*" element={<MainPage />} />
        <Route path="/auth" element={!user ? <Auth /> : <Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
