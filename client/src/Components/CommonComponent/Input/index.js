import React from "react"; 
import "./index.css";

export default function index ({
    label ="username",
    placeholder = "Enter your UserName",
    type = "text",
}){  
    return (
        <div className="input-div">   
            <label className="input-label">{label}</label>     
            <input type={type} placeholder={placeholder} className="input-type" />
        </div>
    );
}
