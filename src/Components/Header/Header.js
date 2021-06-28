import React from 'react';
import { 
    Link } from 'react-router-dom';
import saboreologo from '../../images/saboreologo.svg';
import Menu from '../Menu/Menu';
import './Header.css';
import CartButton from '../CartButton/CartButton';

const Header = () => {
    return (
        <header className="header">
            <Link to="/"><div className="logo"><img src={saboreologo} alt="svg" /></div></Link>
            <div className="menuwrapper">
                <Menu />
                <CartButton />
            </div>
        </header>
    );
}

export default Header;