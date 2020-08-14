import React from 'react';
import { NavLink } from 'react-router-dom';
import LinkList from '../LinkList';

import './index.css';

const Footer = () => {
  const data = [
    <NavLink className="" to="/">Home</NavLink>,
  ];

  return (
    <footer id="footer">
      <LinkList data={data} />
    </footer>
  );
};

export default Footer;
