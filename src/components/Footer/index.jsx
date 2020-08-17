import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => (
  <footer className="fixed bottom-0 container w-full flex flex-wrap flex-col fixed h-12 bg-gray-800 pin-t pin-r pin-l">
    <div className="flex flex-col sm:flex-row w-full justify-center items-center px-4 sm:px-6 py-1 bg-gray-800 shadow sm:shadow-none">
      <div className="w-full sm:w-auto self-end sm:self-center sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0">
        <div className="flex mr-2 hover:bg-red-600 rounded-md justify-center box-content h-10 w-32 items-center">
          <NavLink className="text-white visited:text-white no-underline" to="/">Home</NavLink>
        </div>
        <div className="flex mr-2 hover:bg-red-600 rounded-md justify-center box-content h-10 w-32 items-center">
          <NavLink className="text-white visited:text-white no-underline" to="/">Home 1</NavLink>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
