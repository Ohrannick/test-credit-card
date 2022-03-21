import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../assests/img/navbar-logo.svg';
import './navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <img src={Logo} alt='logo' className='navbar__logo' />
        <div className='navbar__header'>GOLD BANK</div>
        <div className='navbar__login'>
          <NavLink to='/card'>Отправить</NavLink>
        </div>
        <div className='navbar__registration'>
          <NavLink to='/registration'>Регистрация</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
