"use client";
import { ShoppingBag, ShoppingCart } from "lucide-react";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../ContextProvider/CartProvider";

const Navbar = () => {
  const { state, dispatch } = useContext(cartContext);

  useEffect(() => {
    dispatch({
      type: "SET_STATE",
      payload: JSON.parse(localStorage.getItem("cart")),
    });
  }, [dispatch]);

  return (
    <div className="p-2 flex justify-between relative">
      <ShoppingBag />
      <div className="pr-2 pt-2">
        <Link href="/cart">
          <button>
            <ShoppingCart />
          </button>
          <p className="bg-blue-600 w-6 h-6 rounded-full absolute right-0 top-0 text-white text-center">
            {state.totalQuantity}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
