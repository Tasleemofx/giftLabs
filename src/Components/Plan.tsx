import React from 'react';

interface Plan{
    name: string;
    price: string
}
const Plan=({name, price}: Plan)=>{
    return (
        <div className="plan">
            <h1>{name}</h1>
            <h3>{price}</h3>
            <p>This</p>
        </div>
    )
}

export default Plan;