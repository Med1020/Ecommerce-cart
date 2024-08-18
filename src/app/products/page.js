import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";

import React from "react";

async function page() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();

  return (
    <main className="flex flex-col min-w-full p-8 md:py-12 md:px-24">
      <Navbar />
      <ProductCard products={products} />
    </main>
  );
}

export default page;
