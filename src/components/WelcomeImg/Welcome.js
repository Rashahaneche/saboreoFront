import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';
const WelcomeImg = () => {    
return (
<div className="WelcomeImage"> 
    <h1 className="textTitle">Bienvenido a la mayor comunidad <br/>de cocineros aficionados</h1>
    <p className="textDescrp">Compra o vende tus platos favoritos, en Saboreo<br/>hay espacio para todos los paladares</p>
    <br></br>
    <div className="ButtonStyle" >
        <li>
			<Link className="LinkStyle" to="/signup">Registro</Link>
			</li>
    </div>

</div>
)}

export default WelcomeImg;