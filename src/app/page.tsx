import Image from "next/image";

export default function Home() {
  return (
    <div className="border border-red-600 pt-16 h-screen">
      <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-yellow-500 text-center mt-5">
        Welcome to my site
      </h1>
      <div className="flex flex-col">
        <div className="border border-green-500 flex flex-row justify-center gap-5">
          <div className="w-32 h-32 rounded-full border-4 border-black-900 overflow-hidden flex items-center justify-center ">
            <img src="/products.svg" alt="Products" width={200} />
          </div>
          <div className="border-4 boder-blue-500 text-2xl">Visit Products</div>
        </div>
      </div>
    </div>
  );
}
