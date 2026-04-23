import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";

const loadCart = () => {
  try{
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : undefined;
  }catch {
    return undefined;
  }
}

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: {
    cart: loadCart(),
  },
});


store.subscribe(() => {
  try {
    const state = store.getState();
    localStorage.setItem("cart", JSON.stringify(state.cart));
  } catch {
     console.error("Cart load nae hua", err);
  return undefined;
  }
});