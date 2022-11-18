import React, { useState } from "react";
import "./LoginForm.css"
import { Link } from "react-router-dom";

import "./LoginForm.css";
const DEFAULT_FORM = {
    firstName:"",
    userName:"",
    email: "",
    address:""
}
const LoginForm = () => {
    const [formUser, setFormUser]= useState(DEFAULT_FORM)

    const handleChange=(e)=>{
        setFormUser((prev)=>({...prev, [e.target.name]:e.target.value }))
    }
  return (
    <div className="myForm">
      <form className="products_form">
        <input type="text"
         name="firstName"
          placeholder="Yvonne"
           value={formUser.firstName}
           onChange={handleChange}
            />
        <input
          type="text"
          name="userName"
          placeholder="yvon"
          value={formUser.userName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="yvonne@gmail.com"
          value={formUser.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="nyeri town"
   
  
    value={formUser.address}
          onChange={handleChange}
        />
        
        <button><Link to="product"> Submit </Link></button>
      </form>
    
    </div>
  );
};

export default LoginForm;
