import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  return (
    <>
      {cart.map((cart) => {
        return(
          <>
          <div>
            <img src={cart.produtImage} alt="" />
          </div>
          <div>
          <p>{cart.images} </p>
          <p>{cart.produtName} </p>
          <p>{cart.description} </p>
          <p>{cart.price} </p>
          <p>{cart.discountPrice} </p>
          <p>{cart.amount} </p>
          </div>
        </>
        )
      })}
    </>
  );
};

export default Cart;
