import React, { useState } from "react";
import "./Contacts.css"
import {BsInstagram } from 'react-icons/bs';
import {AiFillTwitterCircle } from 'react-icons/ai';
import {BsFacebook } from 'react-icons/bs';

const DEFAULT_FORM = {
  name: "",
  email: "",
  message: ""
}

const Contacts = () => {
  const [formContacts, setFormContacts]= useState(DEFAULT_FORM)
  const [setContacts]= useState([])
const handleChange =(e)=>{
  setFormContacts((prev)=>({...prev, [e.target.name]: e.target.value}))
}

const handleSubmit= (e)=>{
  e.preventDefault()
  const newContacts = {...formContacts}
  setContacts(newContacts)
}

  return (
    <div className="contc">
      <h1>Get in touch with us</h1>
      <form className="formCont">
        <input type="text"
        id="name"
         name="name"
          placeholder="Name"
           value={formContacts.name}
           onChange={handleChange}
            />
        <input type="text"
         name="email"
         id="email"
          placeholder="email"
           value={formContacts.email}
           onChange={handleChange}
           />
        <textarea
          name="message"
          id="message"
          placeholder="message"
          cols="30"
          rows="10"
          value={formContacts.message}
          onChange={handleChange}
        ></textarea>
        <button onClick={handleSubmit}>Send</button>
      </form>
      <div className="social_media">
           < BsInstagram />
      < AiFillTwitterCircle />
      < BsFacebook />
      </div>
   
    </div>
  );
};

export default Contacts;
