import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'

import { useAuthContext, AuthProvider } from '../../contexts/AuthContext'

const Menu = () => {
	
	// Cargamos contexto
	const authContext = useAuthContext();
	
	// Menu a mostrar si estas logeado.

	return(
		authContext.userProfile ?
		<div className="menu-container">
			  <ul>
				<li>
				  <Link to="/cocineros">Cocineros</Link>
				</li>
				<li>
					<Link to={`/user/${authContext.userProfile.nickname}`}>Perfil</Link>
				</li>
				<li>
				  <Link onClick={authContext.userLogout} >Logout</Link>
				</li>
			  </ul>
		</div>
		:
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
	)
}
export default Menu;

