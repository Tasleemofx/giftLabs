import React from 'react';

interface Plan{
    name: string;
    price: string;
    className: string;
    details: string
}
const Plan=({name, price, className, details}: Plan)=>{
    return (
        <div className={className}>
            <h1>{name}</h1>
            <h3>{price}</h3>
            <p>The {name} plan is flexible and includes {details}
            </p>
        </div>
    )
}

export default Plan;