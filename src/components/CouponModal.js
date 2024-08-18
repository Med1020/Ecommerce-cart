"use client";
import React, { useEffect } from "react";

const CouponModal = ({ handleCloseCouponModal }) => {
  return (
    <div className="absolute z-10 h-screen w-screen flex justify-center items-center bg-black bg-opacity-25">
      <div className="h-1/4 w-1/4 bg-white rounded-md text-center flex justify-left p-4">
        <div className="w-2/3">
          <p className="text-gray-300">No coupons available</p>
        </div>
      </div>
    </div>
  );
};

export default CouponModal;
