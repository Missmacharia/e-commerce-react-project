import React from "react";
import "./Home.css"
import { useDispatch, useSelector } from "react-redux";
import cloth1 from "../../Images/WomenImages/cloth1.jpg";
import { deleteProductsAction, fetchProducts} from "../Redux/Products";
import { counter } from "../Redux/counter";
const Product = () => {
  const dispatch =useDispatch()
  const { products } = useSelector((state) => state.products);

  // const id = "8FOctsmqXpLPS49SK9HS"

  const handleDelete = (product)=>{
    dispatch(deleteProductsAction(product))
    dispatch(fetchProducts())
  }
  const handleAddCart =(e)=>{
    increment()
  }
  // const {images}= useSelector((state)=> state.images)
  return (
    <div className="product_home">
      {products?.map((product) => (
        <div  className="product_card">
          <div className="product_img">
            <img src={product.produtImage} alt="" />
          </div>
          <p>{product.images} </p>
          <h1>{product.produtName} </h1>
          <p>{product.description} </p>
          <p>{product.price} </p>
          <h3>{product.discountPrice} </h3>
          <button onClick={()=>{
            handleAddCart
          }}>Add to Cart</button>
          <button onClick={()=>{
            handleDelete(product)
          }} >Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Product;
