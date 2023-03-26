import React from 'react';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <>
            
          <nav className="navbar bg-info flex justify-between px-5">
            <img src={logo} alt="" />
            <div>
            <a href='/shop' className="btn btn-ghost text-black normal-case text-xl">Shop</a>
            <a href='/order' className="btn btn-ghost text-black normal-case text-xl">Order</a>
            <a href='/inventory' className="btn btn-ghost text-black normal-case text-xl">Invebtory</a>
            <a href='/login' className="btn btn-ghost text-black normal-case text-xl">Login</a>
            </div>
          </nav>
        </>
    );
};

export default Header;