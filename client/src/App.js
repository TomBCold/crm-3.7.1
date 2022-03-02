import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Auth from './components/Auth/Auth';
import MainPage from './components/MainPage/MainPage';
import './App.css';

function App() {
  const user = useSelector((state) => state.user);
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
