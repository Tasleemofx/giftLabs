import React from 'react';
import Plan from './Plan';

const Plans=()=>{
    return (
        <section>
            <h2>Plans</h2>
            <p> We have customizable plans for everyone</p>
            <Plan name="Basic" price="#0" />
            <Plan name="Premium" price="#10" />
        </section>
    )
}

export default Plans;