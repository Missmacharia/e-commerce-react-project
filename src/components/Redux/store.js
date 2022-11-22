import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./Products";
import counterReducer from "./counter";
import cartReducer from "./cart";

const store = configureStore({
    reducer:{
     products: productsReducer,
     counter : counterReducer,
     cart: cartReducer
    }
})
export default store