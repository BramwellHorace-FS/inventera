import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Materials from './pages/materials';
import Products from './pages/products';
import Productions from './pages/productions';
import Formulas from './pages/formulas';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/materials" element={<Materials />} />
      <Route path="/products" element={<Products />} />
      <Route path="/productions" element={<Productions />} />
      <Route path="/formulas" element={<Formulas />} />
    </Routes>
  );
}

export default App;
