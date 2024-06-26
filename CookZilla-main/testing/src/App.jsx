import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import Login from './pages/login.jsx';
import Search from './pages/search.jsx';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
      </Routes>
  );
}

export default App;
