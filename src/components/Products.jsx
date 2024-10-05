import React from "react";
import "./products.css";
import product1 from "../assets/img/img (4).jpeg";
import product2 from "../assets/img/img (6).jpeg";
import product3 from "../assets/img/img (10).jpeg";
const Products = () => {
  return (
    <div className="px-12 mx-3 my-10 space-y-2  ">
      <p className="text-4xl font-semibold text-black bogo tracking-widest">
        BUY 1 GET 1 FREE
      </p>
      <p className="text-4xl  font-semibold  bogo tracking-widest  text-black">
        ON <span className="best text-gray-100">BEST SELLING PRODUCTS</span>
      </p>
      {/* products  */}
      <div className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="transition ease-in delay-100 hover:scale-110 p-2 border-2 flex-col justify-center bg-white border-gray-50 rounded-md">
            <img className="w-50 rounded-md" src={product1} alt="" />
            <p className="text-xs my-3 font-extrabold ">Army Green Active Short Sleeve</p>
            <div className="flex space-x-2">
              <p className="text-sm font-extrabold">$ 34.95</p>
              <p className="text-sm line-through text-gray-500">$ 34.95</p>
            </div>
          </div>
          <div className="transition ease-in delay-100 hover:scale-110 p-2 border-2 flex-col justify-center bg-white border-gray-50 rounded-md">
            <img className="w-50 rounded-md" src={product2} alt="" />
            <p className="text-xs my-3 font-extrabold ">Army Green Active Short Sleeve</p>
            <div className="flex space-x-2">
              <p className="text-sm font-extrabold">$ 34.95</p>
              <p className="text-sm line-through text-gray-500">$ 34.95</p>
            </div>
          </div>
          <div className="transition ease-in delay-100 hover:scale-110 p-2 border-2 flex-col justify-center bg-white border-gray-50 rounded-md">
            <img className="w-50 rounded-md" src={product2} alt="" />
            <p className="text-xs my-3 font-extrabold ">Army Green Active Short Sleeve</p>
            <div className="flex space-x-2">
              <p className="text-sm font-extrabold">$ 34.95</p>
              <p className="text-sm line-through text-gray-500">$ 34.95</p>
            </div>
          </div>
          <div className="transition ease-in delay-100 hover:scale-110 p-2 border-2 flex-col justify-center bg-white border-gray-50 rounded-md">
            <img className="w-50 rounded-md" src={product3} alt="" />
            <p className="text-xs my-3 font-extrabold ">Army Green Active Short Sleeve</p>
            <div className="flex space-x-2">
              <p className="text-sm font-extrabold">$ 34.95</p>
              <p className="text-sm line-through text-gray-500">$ 34.95</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
