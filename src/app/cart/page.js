"use client";
import React, { useContext, useEffect, useState } from "react";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { cartContext } from "@/ContextProvider/CartProvider";
import CartProductCard from "@/components/CartProductCard";

const page = () => {
  const { state, dispatch } = useContext(cartContext);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch({
      type: "SET_STATE",
      payload: JSON.parse(localStorage.getItem("cart")),
    });
    setIsLoading(false);
  }, [dispatch]);

  if (isLoading) {
    // Render a loading state while the data is being fetched from localStorage to globalState
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link href="/" className="flex flex-row ">
        <span className="p-4">
          <ChevronLeft />
        </span>
        <button>Browse Products </button>
      </Link>
      <CartProductCard />
    </div>
  );
};

export default page;
