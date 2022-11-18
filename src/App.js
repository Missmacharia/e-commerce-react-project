import "./App.css";
import Service from "./components/Routes/Service";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {  fetchProducts } from './components/Redux/Products';






function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div className="App">
     <Service />
    </div>
  );
}

export default App;
