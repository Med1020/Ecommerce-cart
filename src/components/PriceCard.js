import React from "react";
import Button from "./UI/Button";
import { useRouter } from "next/navigation";
import { convertUSDtoINR } from "@/lib/utils";

const PriceCard = ({ price, productCount, handleAddCoupon }) => {
  const router = useRouter();
  const handlePlaceOrder = () => {
    setTimeout(() => {
      router.push("/orderconfirmed");
    }, 3000);
  };
  const convertPrice = convertUSDtoINR(price);
  return (
    <div className="flex flex-col gap-4 grow pb-10 pt-4">
      <header>
        PRICE DETAILS <span>({productCount} items)</span>
      </header>
      <div className="flex justify-between">
        <p>Total MRP</p>
        <p>₹ {convertPrice}</p>
      </div>
      <div className="flex justify-between">
        <p>Discount on MRP</p>
        <p>-</p>
      </div>
      <div className="flex justify-between">
        <p>Coupon Discount</p>
        <button onClick={handleAddCoupon} className="text-red-500">
          Apply Coupon
        </button>
      </div>
      <div className="flex justify-between">
        <p>Shipping Fee</p>
        <p className="text-green-500">FREE</p>
      </div>
      <p className="border border-b-gray-200"></p>
      <div className="flex justify-between">
        <p>Total Amount</p>
        <p>
          <span>Rs.</span>total amount
        </p>
      </div>
      <Button type="button" intent="filled" onClick={handlePlaceOrder}>
        Place Order
      </Button>
    </div>
  );
};

export default PriceCard;
