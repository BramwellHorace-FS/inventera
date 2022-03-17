import React from 'react';
import { NavLink } from 'react-router-dom';
import Styles from './navigation.module.css';

export default function Navigation() {
  return (
    <nav className={Styles.nav}>
      <NavLink
        exact
        to="/"
        className={({ isActive }) =>
          isActive ? Styles.active : Styles.navLink
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/materials"
        className={({ isActive }) =>
          isActive ? Styles.active : Styles.navLink
        }
      >
        Materials
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) =>
          isActive ? Styles.active : Styles.navLink
        }
      >
        Products
      </NavLink>
      <NavLink
        to="/productions"
        className={({ isActive }) =>
          isActive ? Styles.active : Styles.navLink
        }
      >
        Productions
      </NavLink>
      <NavLink
        to="/formulas"
        className={({ isActive }) =>
          isActive ? Styles.active : Styles.navLink
        }
      >
        Formulas
      </NavLink>
    </nav>
  );
}
