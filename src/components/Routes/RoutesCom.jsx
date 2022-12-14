import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../Products/Products";
import LoginForm from "../Login/LoginForm";
import Home from "../Home/Home";
import About from "../About/About";
import Contacts from "../Contacts/Contacts";
import Cart from "../cart/Cart";

const RoutesCom = () => {
  return (
    <>
      <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/home" element ={ <Home /> } />
          <Route path="/Products" element= {<Products /> } /> 
          <Route path="/about" element= {<About /> } /> 
          <Route path="/contacts" element= {<Contacts /> } /> 
          <Route path="/cart" element= {< Cart /> } /> 
      </Routes>
    </>
  );
};

export default RoutesCom;
