import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const data = [
    <NavLink className="link-list-a" to="/">Home</NavLink>,
  ];

  return (
    <footer id="footer">
    </footer>
  );
};

export default Footer;
