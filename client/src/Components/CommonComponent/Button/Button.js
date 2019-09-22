import React from "react"; 
import "./Button.css";

export default function Button ({
    value = "login",
    className = "button-input",
}){  
    return (
        <div className="button-div">        
            <input type="submit" name="submit" className={className} value={value} />
        </div>
    );
}