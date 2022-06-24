import React from 'react';
import Plan from './Plan';
import "../Styles/Plans.css";

const Plans=()=>{
    return (
        <section>
            <div className="plan-heading">
                <h2>Plans</h2>
                <p> We have customizable plans for everyone</p>
            </div>
            <div className="Plans">
                <Plan name="Basic" price="#0" className="plan"
                details=" gift packing only.
                You pick up the gift by hand after it has been packed."/>
                <Plan name="Premium" price="#10" className="plan"
                details=" gift management and delivery.
                We take full responsibility for the gift until 
                it gets to the owner and 
                they decide whether to keep or return it."/>
            </div>
        </section>
    )
}

export default Plans;