"use client";

import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../ContextProvider/CartProvider";

import CouponModal from "./CouponModal";
import { Minus, Plus, X } from "lucide-react";
import PriceCard from "./PriceCard";

const CartProductCard = () => {
  const { state, dispatch } = useContext(cartContext);
  const [isCouponModelOpen, setIsCouponModalOpen] = useState(false);
  const [products, setProducts] = useState(state.cart || []);

  const handleAddCoupon = () => {
    setIsCouponModalOpen(!isCouponModelOpen);
  };
  const handleCloseCouponModal = () => {
    setIsCouponModalOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleCloseCouponModal);
    return () => {
      document.removeEventListener("mousedown", handleCloseCouponModal);
    };
  }, []);

  useEffect(() => {
    setProducts(state.cart || []);
  }, [state]);

  const handleRemoveProductFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const handleIncreaseQuantity = (prod) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: prod });
  };

  const handleDecreaseQuantity = (prod) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: prod });
  };

  return (
    <div className="relative">
      {isCouponModelOpen && (
        <CouponModal handleCloseCouponModal={handleCloseCouponModal} />
      )}
      <div className="flex flex-col max-h-screen p-8 md:p-12">
        <header className="border-b border-gray-200 font-semibold text-lg pb-2">
          Cart
        </header>
        {products && products.length > 0 ? (
          <div className="flex flex-col w-full md:flex-row">
            <div className="grow mr-8 md:overflow-y-scroll no-scrollbar">
              {products.map(({ product: prod, quantity }) => {
                const { title, image, price, id, rating, category } = prod;
                return (
                  <div
                    className="w-full flex flex-row mb-4 p-2 md:p-4 justify-between border-b border-gray-200"
                    key={id}
                  >
                    <div className="flex flex-row ">
                      <div className="h-24 w-24 md:h-40 md:w-40 flex justify-center border border-gray-200 rounded-md mx-4 ">
                        <Image
                          src={image}
                          alt={title}
                          width="100"
                          height="100"
                        />
                      </div>
                      <div className="flex flex-col gap-2 ">
                        <p className="text-ellipsis text-wrap text-sm">
                          {title}
                        </p>
                        <p className="font-semibold">₹{price}</p>
                        <div className="flex">
                          <p>Quantity:</p>
                          <button
                            className={`px-4 ${
                              quantity === 1 && "cursor-not-allowed"
                            } `}
                            onClick={() => handleDecreaseQuantity(prod)}
                            disabled={quantity <= 1}
                          >
                            <Minus size={16} />
                          </button>
                          <p>{quantity}</p>
                          <button
                            className="px-4"
                            onClick={() => handleIncreaseQuantity(prod)}
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      className="h-fit"
                      onClick={() => handleRemoveProductFromCart(id)}
                    >
                      <X size={16} />
                    </button>
                  </div>
                );
              })}
            </div>
            <PriceCard
              price={state.totalPrice}
              productCount={state.totalQuantity}
              handleAddCoupon={handleAddCoupon}
            />
          </div>
        ) : (
          <div className="py-8 text-gray-400">
            <p>No products in cart..</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartProductCard;
