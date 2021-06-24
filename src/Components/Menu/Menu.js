import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'

const Menu = () => {
  return (
    
      <div className="menu-container">
      
        <ul>
          <li className="cocineros">
            <Link to="/cocineros">Cocineros</Link>
          </li>
          <li className="Ingresar">
            <Link to="/ingresar">Ingresar</Link>
          </li>
          <li className="Registro">
            <Link to="/registro">Registro</Link>
          </li>
          
        </ul>
        
        
      </div>
  );
}

export default Menu;
