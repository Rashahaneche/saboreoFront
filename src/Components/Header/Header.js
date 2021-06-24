import React from 'react';
import { 
    Link } from 'react-router-dom';
import saboreologo from '../../images/saboreologo.svg';
import Menu from '../Menu/Menu';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <Link to="/"><div className="test"><img src={saboreologo} alt="svg" /></div></Link>
            <Menu />
        </header>
    );
}

export default Header;