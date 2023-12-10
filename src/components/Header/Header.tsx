import React, { FC } from 'react';
import logo from '../../img/logo.png';
import './Header.scss';

const Header: FC = () => {
  return (
    <header className='Header'>
      <img src={logo}></img>
    </header>
  );
};

export default Header;
