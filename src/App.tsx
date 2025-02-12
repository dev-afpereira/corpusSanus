import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoutes from './routes/PrivateRoutes';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<PrivateRoutes />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
