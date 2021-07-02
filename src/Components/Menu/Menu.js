import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
    <div className="menu-container">
      <ul>
        <li>
          <Link to="/cocineros">Cocineros</Link>
        </li>
        <li>
          <Link to="/signin">Ingresar</Link>
        </li>
        <li>
          <Link to="/signup">Registro</Link>
        </li>
      </ul>
    </div>
  );
}
export default Menu;

