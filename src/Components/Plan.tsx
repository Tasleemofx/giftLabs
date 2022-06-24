import React from 'react';

interface Plan{
    name: string;
    price: string;
    className: string
}
const Plan=({name, price, className}: Plan)=>{
    return (
        <div className={className}>
            <h1>{name}</h1>
            <h3>{price}</h3>
            <p>This plan is {} and includes
                gift manangement and delivery.
                We take full responsibility for the gift until 
                it gets to the owner and 
                they decide whether to keep or return it.
            </p>
        </div>
    )
}

export default Plan;