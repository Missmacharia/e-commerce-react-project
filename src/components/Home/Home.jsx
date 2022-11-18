import React from "react";
import "./Home.css"
import { useSelector } from "react-redux";
import cloth1 from "../../Images/WomenImages/cloth1.jpg";
const Product = () => {
  const { products, loading } = useSelector((state) => state.products);
  return (
    <div className="product_home">
      {products?.map((products) => (
        <div  className="product_card">
          <div className="product_img">
            <img src={cloth1} alt="" />
          </div>
          <h1>{products.produtName} </h1>
          <p>{products.description} </p>
          <p>{products.price} </p>
          <h3>{products.discountPrice} </h3>
          
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Product;
