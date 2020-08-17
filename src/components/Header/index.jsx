import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './index.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
    };

    this.navToggle = this.navToggle.bind(this);
  }

  navToggle() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    const { isToggleOn } = this.state;
    return (
      <header className="w-full flex flex-wrap flex-col fixed sm:relative bg-gray-800 pin-t pin-r pin-l">
        <nav className="flex flex-col sm:flex-row w-full justify-between items-center px-4 sm:px-6 py-1 bg-gray-800 shadow sm:shadow-none">
          <div className="w-full sm:w-auto self-start sm:self-center flex flex-row sm:flex-none flex-no-wrap justify-between items-center">
            <NavLink className="no-underline py-1 text-white visited:text-white" to="/"><h1 className="font-bold text-lg tracking-widest">LOGO</h1></NavLink>
            <button className={isToggleOn ? 'hamburger block sm:hidden focus:outline-none' : 'hamburger block sm:hidden focus:outline-none open'} type="button" onClick={this.navToggle}>
              <span className="hamburger__top-bun" />
              <span className="hamburger__bottom-bun" />
            </button>
          </div>
          <div className={isToggleOn ? 'w-full sm:w-auto self-end sm:self-center sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0 hidden flex' : 'w-full sm:w-auto self-end sm:self-center sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0'}>
            <div className="flex mr-2 hover:bg-red-600 rounded-md justify-center box-content h-10 w-32 items-center">
              <NavLink className="text-white visited:text-white no-underline" to="/">About</NavLink>
            </div>
            <div className="flex mr-2 hover:bg-red-600 rounded-md justify-center box-content h-10 w-32 items-center">
              <NavLink className="text-white hover:text-red-600 visited:text-white no-underline" to="/contact">Contact</NavLink>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
export default Header;
