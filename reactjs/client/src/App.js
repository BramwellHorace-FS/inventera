import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Materials from './pages/materials';
import Products from './pages/products';
import Productions from './pages/productions';
import Formulas from './pages/formulas';
import Login from './pages/login';
import Register from './pages/register';
import Layout from './layout';

function App() {
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
          <Route path="/materials" element={<Materials />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productions" element={<Productions />} />
          <Route path="/formulas" element={<Formulas />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
