import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const convertUSDtoINR = (amt) => {
  const convertedAmt = amt * 83.88;
  return Math.floor(convertedAmt);
};
