import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "../Login/LoginForm";
import Product from "../Products/Product";

const RoutesCom = () => {
  return (
    <>
      <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/product" element={<Product />} />
      </Routes>
    </>
  );
};

export default RoutesCom;
