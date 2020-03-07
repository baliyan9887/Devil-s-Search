import React from 'react';
import './create-card.style.css';
import {Card} from '../card/card.components'



export const CreateCard = props => {
    return(
        <div className="card">
           {
            props.devils.map(devil =>(
              <Card key={devil.id} devil={devil}/>
            ) )
          }
         </div>
    )
}