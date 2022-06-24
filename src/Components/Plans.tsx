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
                <Plan name="Basic" price="#0" className="plan"/>
                <Plan name="Premium" price="#10" className="plan"/>
            </div>
        </section>
    )
}

export default Plans;