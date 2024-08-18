"use client";
import React, { useEffect } from "react";

const CouponModal = ({ handleCloseCouponModal }) => {
  return (
    <div className="absolute z-10 h-screen w-screen flex justify-center items-center bg-black bg-opacity-25">
      <div className="h-1/4 w-1/4 bg-white rounded-md text-center flex justify-left p-4">
        <div className="w-2/3">
          <button onClick={handleCloseCouponModal} className="right-0">
            X
          </button>
          <button className="p-2 border border-black">NEWCOMER10</button>
        </div>
      </div>
    </div>
  );
};

export default CouponModal;
