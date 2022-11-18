import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../Products/Products";
import LoginForm from "../Login/LoginForm";
import Home from "../Home/Home";

const RoutesCom = () => {
  return (
    <>
      <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/home" element ={ <Home /> } />
          <Route path="/Products" element= {<Products /> } /> 
      </Routes>
    </>
  );
};

export default RoutesCom;
