import React from "react";
import  '../stylesheets/button.css';

function Button ({ text, isClic, listenClic }) {
    return(
        <button
        className={ isClic ? 'button-clic' : 'button-restart' }
        onClick={listenClic}>

            {text}   

        </button>
    );
}

export default Button;