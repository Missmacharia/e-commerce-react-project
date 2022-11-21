import React from "react";
import "./Home.css"
import { useDispatch, useSelector } from "react-redux";
import cloth1 from "../../Images/WomenImages/cloth1.jpg";
import { deleteProductsAction } from "../Redux/Products";
const Product = () => {
  const dispatch =useDispatch()
  const { products } = useSelector((state) => state.products);
 
  // const {images}= useSelector((state)=> state.images)
  return (
    <div className="product_home">
      {products?.map((products) => (
        <div  className="product_card">
          <div className="product_img">
            <img src={cloth1} alt="" />
          </div>
          <p>{products.images} </p>
          <h1>{products.produtName} </h1>
          <p>{products.description} </p>
          <p>{products.price} </p>
          <h3>{products.discountPrice} </h3>
          <button onClick={dispatch(deleteProductsAction(products))} >Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Product;
