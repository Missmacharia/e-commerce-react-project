import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FiShoppingCart } from 'react-icons/fi';


const Navbar = () => {
  return (
    <div className="links">
      <div className="my_links">
    
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/Contacts">Contacts</Link>
        <Link to ="/Products" >Add new product</Link>
      </div>
      {/* <i class="fa-solid fa-cart-shopping"></i> */}
     
      <div className="logout">
        <div className="icon">
        <FiShoppingCart /> 0
        </div>
        <button>
          <Link to="/">Log Out</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
