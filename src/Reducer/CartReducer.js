import React from "react";

const CartReducer = (state, action) => {
  const localStorageObj = JSON.parse(localStorage.getItem("cart"));
  const currentCart = localStorageObj?.cart ? localStorageObj.cart : [];
  const calculateCartTotal = (cart) => {
    const cartTotal = cart
      .reduce(
        (acc, curVal) => (acc += curVal.product.price * curVal.quantity),
        0
      )
      .toFixed(2);
    return cartTotal;
  };
  const calculateProductCount = (updatedCart) => {
    const productCount = updatedCart.reduce(
      (acc, curVal) => (acc += curVal.quantity),
      0
    );
    return productCount;
  };

  const setCartInLocalStorage = (cartValue) => {
    localStorage.setItem("cart", JSON.stringify(cartValue));
  };

  switch (action.type) {
    case "SET_STATE":
      return action.payload
        ? action.payload
        : {
            cart: [],
            totalPrice: 0,
            totalQuantity: 0,
          };

    case "ADD_TO_CART": {
      const updatedCart = [
        ...currentCart,
        { product: action.payload, quantity: 1 },
      ];

      const total = calculateCartTotal(updatedCart);
      const productCount = calculateProductCount(updatedCart);

      setCartInLocalStorage({
        cart: updatedCart,
        totalPrice: total,
        totalQuantity: productCount,
      });

      return {
        ...state,
        cart: updatedCart,
        totalPrice: total,
        totalQuantity: productCount,
      };
    }

    case "REMOVE_FROM_CART": {
      const updatedCart = currentCart.filter(
        (prod) => prod.product.id !== action.payload
      );
      const total = calculateCartTotal(updatedCart);
      const productCount = calculateProductCount(updatedCart);
      setCartInLocalStorage({
        cart: updatedCart,
        totalPrice: total,
        totalQuantity: productCount,
      });

      return {
        ...state,
        cart: updatedCart,
        totalPrice: total,
        totalQuantity: productCount,
      };
    }

    case "GET_CART_COUNT":

    case "INCREASE_QUANTITY": {
      const updatedCart = currentCart.map((item) =>
        item.product.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      const total = calculateCartTotal(updatedCart);
      const productCount = calculateProductCount(updatedCart);
      setCartInLocalStorage({
        cart: updatedCart,
        totalPrice: total,
        totalQuantity: productCount,
      });

      return {
        ...state,
        cart: updatedCart,
        totalPrice: total,
        totalQuantity: productCount,
      };
    }

    case "DECREASE_QUANTITY": {
      const updatedCart = currentCart.map((item) =>
        item.product.id === action.payload.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

      const total = calculateCartTotal(updatedCart);
      const productCount = calculateProductCount(updatedCart);
      setCartInLocalStorage({
        cart: updatedCart,
        totalPrice: total,
        totalQuantity: productCount,
      });

      return {
        ...state,
        cart: updatedCart,
        totalPrice: total,
        totalQuantity: productCount,
      };
    }

    default:
      return state;
  }
};

export default CartReducer;
