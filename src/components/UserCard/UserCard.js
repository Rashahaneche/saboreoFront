import React from 'react';
import "./UserCard.css"

const UserCard = ({name="Rasha",surname="Haneche",nickname="Cloneword",image}) => {
    return(
    <section className="userCardContainer" >
       <div className="topCard"> 
        {image}     
       </div>
       <h1 className="mainCardinfo">
        {name}
        <span> </span>
        {surname}
        </h1>
        <p>
            {nickname}
        </p>
       
       <button>
        Editar
       </button>

    </section>
    )

};

export default UserCard;