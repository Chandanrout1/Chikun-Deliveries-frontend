import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slice.js";

const store = configureStore({
    reducer:{
        cart: CartSlice,
    }
})

export default store;