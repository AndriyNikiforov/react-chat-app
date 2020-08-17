import React from 'react';
import { NavLink } from 'react-router-dom';

const SideMenu = () => (
  <nav id="sideNav">
    <ul className="sidenav-list">
      <li className="sidenav-list-item">
        <NavLink className="sidenav-link" to="/">Home</NavLink>
      </li>
    </ul>
  </nav>
);

export default SideMenu;
