import React from 'react';
import './card.style.css';
export const Card = props => {
    return(
        <div className="card-container">
            <img alt="users" src={`https://robohash.org/${props.devil.id}?set=set3&size=180x180`}/>
           <h1>{props.devil.name}</h1>
           <p>{props.devil.email}</p>
           <p></p>
           
        </div>
    )
}