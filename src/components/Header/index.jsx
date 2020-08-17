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
      <header className="w-full flex flex-col fixed sm:relative bg-white pin-t pin-r pin-l">
        <nav className="flex flex-col sm:flex-row w-full justify-between items-center px-4 sm:px-6 py-1 bg-white shadow sm:shadow-none border-b-4 border-red-900">
          <div className="w-full sm:w-auto self-start sm:self-center flex flex-row sm:flex-none flex-no-wrap justify-between items-center">
            <NavLink className="no-underline py-1 text-black visited:text-gray-700" to="/"><h1 className="font-bold text-lg tracking-widest">LOGO</h1></NavLink>
            <button className={isToggleOn ? 'hamburger block sm:hidden focus:outline-none' : 'hamburger block sm:hidden focus:outline-none open'} type="button" onClick={this.navToggle}>
              <span className="hamburger__top-bun" />
              <span className="hamburger__bottom-bun" />
            </button>
          </div>
          <div className={isToggleOn ? 'w-full sm:w-auto self-end sm:self-center sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0 hidden flex' : 'w-full sm:w-auto self-end sm:self-center sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0'}>
            <NavLink className="text-black visited:text-gray-700 mr-2 no-underline" to="/">About</NavLink>
            <NavLink className="text-black visited:text-gray-700 mr-2 no-underline" to="/contact">Contact</NavLink>
          </div>
        </nav>
      </header>
    );
  }
}
export default Header;
