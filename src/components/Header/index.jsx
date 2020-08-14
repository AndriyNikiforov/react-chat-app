import React from 'react';
import { NavLink } from 'react-router-dom';
import LinkList from '../LinkList';

import './index.css';

const Header = () => {
  const data = [
    <NavLink className="link-list-a" to="/">Home</NavLink>,
    <NavLink className="link-list-a" to="/">About</NavLink>,
    <NavLink className="link-list-a" to="/contact">Contact</NavLink>,
  ];

  return (
    <header id="header">
      <LinkList data={data} />
    </header>
  );
};

export default Header;
