import React from'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Cart from '../Cart/Cart';
const Menu = () => (
<Router>
  <nav>
    <Logo/>

    <ul>
      <li>
    <Link to="/"> Home </Link>
      </li>
      <li>
      <Link to="/Cocineros"> Cocineros  </Link>
      </li>
      <li>
      <Link to="/Ingresar"> Ingresar </Link>
      </li>
      <li>
      <Link to="/Registro"> Registro </Link>
      </li>
    </ul>
  <Cart/>
  </nav>
  </Router>
);

export default Menu;