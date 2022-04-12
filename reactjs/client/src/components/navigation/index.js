import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="d-flex flex-column p-2 gap-3">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? `light` : `secondary`)}
      >
        Dashboard
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
      <NavLink
        to="/settings"
        className={({ isActive }) => (isActive ? `light` : `secondary`)}
      >
        Settings
      </NavLink>
    </nav>
  );
}
