import React from 'react';
import { NavLink } from 'react-router-dom';
import LinkList from '../LinkList';

import './index.css';

const Header = () => {
  const data = [
    <NavLink className="" to="/">Home</NavLink>,
  ];

  return (
    <header id="header">
      <LinkList data={data} />
    </header>
  );
};

export default Header;
