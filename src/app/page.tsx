"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="pt-16 mt-[5rem]">
      <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-yellow-100 text-center mt-[5rem]">
        Welcome to my site
      </h1>
      <div className="flex flex-col mt-[3rem]">
        <div className="flex flex-col items-center justify-center py-16">
          <div
            className="inline-flex flex-row justify-center gap-5 cursor-pointer my-16"
            onClick={() => router.push("/products")}
          >
            <div className="w-[15vw] h-[15vw] rounded-full border border-black overflow-hidden flex items-center justify-center ">
              <img src="/products.svg" alt="Products" object-cover="true" />
            </div>
            <div className=" items-center flex flex-col justify-around">
              <h2 className="text-center text-4xl">Visit Products</h2>
              <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
            </div>
          </div>
          <div
            className="inline-flex flex-row justify-center gap-5 cursor-pointer my-16"
            onClick={() => router.push("/sellers")}
          >
            <div className="w-[15vw] h-[15vw] rounded-full border border-black overflow-hidden flex items-center justify-center ">
              <img src="/sellers.svg" alt="Products" object-cover="true" />
            </div>
            <div className=" items-center flex flex-col justify-around">
              <h2 className="text-center text-4xl">Sellers Page</h2>
              <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
