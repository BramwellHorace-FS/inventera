import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? `light` : `secondary`)}
      >
        Home
      </NavLink>
      <NavLink
        to="/materials"
        className={({ isActive }) => (isActive ? `light` : `secondary`)}
      >
        Materials
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) => (isActive ? `light` : `secondary`)}
      >
        Products
      </NavLink>
      <NavLink
        to="/productions"
        className={({ isActive }) => (isActive ? `light` : `secondary`)}
      >
        Productions
      </NavLink>
      <NavLink
        to="/formulas"
        className={({ isActive }) => (isActive ? `light` : `secondary`)}
      >
        Formulas
      </NavLink>
    </nav>
  );
}
