import { Routes, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<MainPage />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
