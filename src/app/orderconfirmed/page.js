import React from "react";

const page = () => {
  return (
    <div>
      <div className="h-screen flex flex-col justify-top items-center gap-4 pt-24">
        {" "}
        <svg
          class="checkmark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
        >
          {" "}
          <circle
            class="checkmark__circle"
            cx="26"
            cy="26"
            r="25"
            fill="none"
          />{" "}
          <path
            class="checkmark__check"
            fill="none"
            d="M14.1 27.2l7.1 7.2 16.7-16.8"
          />
        </svg>
        <div>
          <p className="text-2xl font-semibold">Order Placed!</p>
        </div>
      </div>
    </div>
  );
};

export default page;
