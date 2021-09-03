import React from "react";
import { useState } from "react";
import "./addButton.css";
import ShopCar from "./ShopCar.svg";
import up from "./up.svg"
import down from "./down.svg"

const AddButton = () => {
    const [count, setCount] = useState(0);

    const counterButton = () => {
        return (
        <div className="counterAdd"> 
        <img 
            alt="añadir" 
            src={up} 
            onClick={() => setCount(count + 1)}>
            </img>
        <p>|  {count}  |</p>
        <img 
            alt="quitar" 
            src={down} 
            onClick={() => setCount(count - 1)}>
            </img>
        </div>
        );
    }
     const initialButton = () => {
        return (
        <button 
            onClick={() => setCount(count + 1)} 
            className="initialAdd">ADD <img alt="shoping car" src={ShopCar} >
                </img> 
        </button>
         );
    }
    const dispButton = () => {
        if (count === 0) {
            return initialButton();
        } else {
            return counterButton();
        }
    }
return (
    <>
        {dispButton()}
    </>
    );
}

export default AddButton;

