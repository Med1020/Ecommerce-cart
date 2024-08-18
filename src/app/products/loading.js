import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const loading = () => {
  return (
    <div className="grid grid-cols-4 w-full p-24 gap-10">
      {Array(15)
        .fill()
        .map((_, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 p-4 border rounded-lg"
          >
            <Skeleton height={250} width={250} />
            <Skeleton count={2} />
            <Skeleton width="60%" />
          </div>
        ))}
    </div>
  );
};

export default loading;
