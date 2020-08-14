import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.css';

const SideMenu = () => (
  <nav id="sideNav">
    <ul className="">
      <li className="">
        <NavLink className="" to="/">Home</NavLink>
      </li>
    </ul>
  </nav>
);

export default SideMenu;
