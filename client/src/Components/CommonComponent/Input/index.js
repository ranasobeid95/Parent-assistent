import React from "react"; 
import "./index.css";

export default function index ({
    label ="username",
    type = "text",
    placeholder = "Enter your UserName",
    className="input-type"
}){  
    return (  
            <label className="input-label">{ label}   
                 <input type={type} placeholder={placeholder} className={className} />
            </label>  
    );
}
