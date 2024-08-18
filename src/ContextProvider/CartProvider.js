"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import CartReducer from "../Reducer/CartReducer";

export const cartContext = createContext();
export const useCartContext = () => {
  const context = useContext(cartContext);
  return context;
};
const CartProvider = ({ children }) => {
  const [initialState, setInitialState] = useState({
    cart: [],
    totalPrice: 0,
    totalQuantity: 0,
  });

  const [state, dispatch] = useReducer(CartReducer, initialState);
  const [coupon, setCoupon] = useState();

  return (
    <cartContext.Provider value={{ dispatch, state }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
