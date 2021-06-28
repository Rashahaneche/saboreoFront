import React from "react";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { 
    Link } from 'react-router-dom';
import'./CartButton.css'
const CartButton= () => {
  return(
  <div className='CartButton'>
    <Link to='/Cart'> <ShoppingCartIcon/></Link> 
  </div>) 
};  
export default CartButton;