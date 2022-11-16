import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="links">
      <div className="my_links">
    
        <Link to="/product">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/Contacts">Contacts</Link>
      </div>
      <i class="fa-solid fa-cart-shopping"></i>
      <div className="logout">
        <div className="icon"></div>
        <button>
          {" "}
          <Link to="/">Log Out</Link>{" "}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
