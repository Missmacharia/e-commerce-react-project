import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FiShoppingCart } from 'react-icons/fi';
import { useSelector } from "react-redux";


const Navbar = () => {
  const count = useSelector((state)=> state.counter.count)
  return (
    <div className="links">
      <div className="my_links">
    
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to ="/Products" >Add new product</Link>
      </div>
      {/* <i class="fa-solid fa-cart-shopping"></i> */}
     
      <div className="logout">
        <div className="icon">
          <Link to= "/cart" className="cart" ><FiShoppingCart /> {count}</Link>
        </div>
        <button>
          <Link to="/">Log Out</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
