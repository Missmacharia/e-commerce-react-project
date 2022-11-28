import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartProductsAction, fetchCartProductsAction } from "../Redux/cart";
import "./Cart.css";
const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const handleDelete = (cart) => {
    dispatch(deleteCartProductsAction(cart));
    dispatch(fetchCartProductsAction());
  };
  return (
    <div className="card_home">
      {cart?.map((cart) => {
        return (
          <div className="cart_card">
            <div className="card_img">
              <img
                src={cart.produtImage}
                alt=""
                style={{ width: "250px", borderRadius: "10px" }}
              />
            </div>
            <div>
              <p>{cart.images} </p>
              <p>{cart.produtName} </p>
              <p>{cart.description} </p>
              <p>{cart.price} </p>
              <p>{cart.discountPrice} </p>
              <p>{cart.amount} </p>
            </div>
            <button
              onClick={() => {
                handleDelete(cart);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
