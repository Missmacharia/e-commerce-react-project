import React from "react";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductsAction, fetchProducts } from "../Redux/Products";
import { AddCartAction } from "../Redux/counter";
import {  addCartProductAction, fetchCartProductsAction } from "../Redux/cart";
import { Link } from "react-router-dom";


const Product = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);


  // const id = "8FOctsmqXpLPS49SK9HS"

  const handleDelete = (product) => {
    dispatch(deleteProductsAction(product));
    dispatch(fetchProducts());
  };
  // const handleAddCart =(e)=>{
  //   prompt('product successfully added to cart')
  //   increment()
  // }
  // const {images}= useSelector((state)=> state.images)

  const handleAddCart = async (cart)=>{
    await dispatch(AddCartAction())
    await dispatch(fetchCartProductsAction())
    dispatch(addCartProductAction())
  }

  return (
    <div className="product_home">
      {products?.map((product) => (
        <div className="product_card">
          <div className="product_img">
            <img src={product.produtImage} alt="" />
          </div>
          <p>{product.images} </p>
          <h1>{product.produtName} </h1>
          <p>{product.description} </p>
          <p>{product.price} </p>
          <h3>{product.discountPrice} </h3>
          <div className="mybuttons">
            <button onClick={handleAddCart}> <Link to="/cart" >Add to Cart</Link> </button>

            <button
              onClick={() => {
                handleDelete(product);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
