import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Register from './pages/register';
import Logout from './pages/logout';
import Productions from './pages/productions';
import Products from './pages/products';
import Materials from './pages/materials';
import Formulas from './pages/formulas';
import NotFound from './pages/404';
import Layout from './layout';

export default function App() {
  if (!localStorage.getItem('token')) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/productions" element={<Productions />} />
          <Route path="/products" element={<Products />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/formulas" element={<Formulas />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
