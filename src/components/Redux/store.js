import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./Products";
import counterReducer from "./counter";

const store = configureStore({
    reducer:{
     products: productsReducer,
     counter : counterReducer 
    }
})
export default store