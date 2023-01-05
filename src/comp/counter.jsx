import React from "react";
import '../stylesheets/counter.css'
function Counter({ value }){
    return(
        <div className="counter_number">
            {value}
        </div>
    )
    
}
export default Counter;