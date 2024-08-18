"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../ContextProvider/CartProvider";
import Link from "next/link";
import Button from "./UI/Button";
import { convertUSDtoINR } from "@/lib/utils";

const ProductCard = ({ products }) => {
  const [displayProducts, setDisplayProducts] = useState(products);
  const { state, dispatch } = useContext(cartContext);

  const handleAddToCart = (prod) => {
    dispatch({ type: "ADD_TO_CART", payload: prod });
  };

  const isProductInCart = (id) => {
    const prodInCart = state.cart.find(
      (cartProd) => cartProd.product.id === id
    );
    return prodInCart;
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center items-center">
      {displayProducts.map((prod) => {
        const { title, image, price, id, rating, category } = prod;
        const convertedPrice = convertUSDtoINR(price);
        return (
          <div
            className="w-32 md:w-56 lg:w-64 flex flex-col items-center gap-4 p-4 text-xs md:text-base hover:shadow-lg cursor-pointer"
            key={id}
          >
            <div className="h-24 w-24 md:h-48 md:w-48 flex justify-center bg-white ">
              <Image src={image} alt={title} width="150" height="250" />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <p className="text-xs md:text-base truncate">{title}</p>

              <p className="md:text-lg font-semibold">₹ {convertedPrice}</p>
              {isProductInCart(id) ? (
                <Link href="/cart">
                  <Button type="button" intent="filled" className="w-full">
                    Go to Cart
                  </Button>
                </Link>
              ) : (
                <Button type="button" onClick={() => handleAddToCart(prod)}>
                  Add To Cart
                </Button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
