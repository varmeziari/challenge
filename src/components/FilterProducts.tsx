"use client";

import { ProductType } from "@/types/Product";
import React, { useState } from "react";
import ProductCard from "./ProductCard";

type Props = {
  data: ProductType[];
};

export default function FilterProducts({ data }: Props) {
  const [filterCat, setFilterCat] = useState<string>("no filter");

  const categories = [
    "no filter",
    ...Array.from(new Set(data.map((item) => item.category))),
  ];

  const filterData =
    filterCat === "no filter"
      ? data
      : data.filter((item) => item.category === filterCat);

  return (
    <div className="flex min-h-screen pt-20 px-8 flex-col bg-blue-50">
      <div className="p-4 flex flex-row justify-center items-center gap-10 mt-20 ">
        <h1 className="text-xl font-semibold ">Filter List by Category</h1>

        <select
          className="w-[20vw] p-2 border border-gray-300 rounded-lg bg-white text-gray-700 shadow-md relative"
          value={filterCat}
          onChange={(e) => setFilterCat(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-center mx-auto mt-5">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-16 xl:grid-cols-4 xl:gap-10">
          {filterData.map((product: ProductType) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
