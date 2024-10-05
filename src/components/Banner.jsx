import React from "react";
import "./banner.css";
import logo from "../assets/Logo/Valuetainment.svg";
import bannerproduct1 from '../assets/img/img (9).png'
import bannerproduct2 from '../assets/img/product1.jpg'
import bannerproduct3 from '../assets/img/product3.jpeg'
import bannerproduct4 from '../assets/img/product2.png'
const Banner = () => {
  return (
    <div className=" text-white px-12 pt-5 ">
      <div className="flex justify-between ">
        <div className="flex space-x-3">
        <img className="w-10 logo " src={logo} alt="" />
        <h1 className="text-6xl font-bold ">VTMERCH</h1>
        </div>
        <div>
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {/* slogan  */}
      <div className="mt-16 ms-8 flex space-x-12">
        <h1 className="slogan text-6xl opacity-50">FUTURE </h1>
        <h1 className="slogan text-6xl opacity-50">LOOKS </h1>
        <h1 className="slogan text-6xl opacity-50">BRIGHTS!</h1>
      </div>
      {/* banner products  */}
      <div className="pb-10 ms-12 relative -top-5 flex space-x-4">
        <div>
            <img src={bannerproduct1} className="w-56 rounded-lg" alt="" />
            <p className="text-xs my-3 ">Army Green Active Short Sleeve</p>
            <div className="flex space-x-2">
              <p className="text-xs">$ 34.95</p>
              <p className="text-xs line-through">$ 34.95</p>
            </div>
        </div>
        <div>
            <img src={bannerproduct2} className="w-56 rounded-lg" alt="" />
            <p className="text-xs my-3 ">Army Green Active Short Sleeve</p>
            <div className="flex space-x-2">
              <p className="text-xs">$ 34.95</p>
              <p className="text-xs line-through">$ 34.95</p>
            </div>
        </div>
        <div>
            <img src={bannerproduct3} className="w-56 rounded-lg" alt="" />
            <p className="text-xs my-3 ">Army Green Active Short Sleeve</p>
            <div className="flex space-x-2">
              <p className="text-xs">$ 34.95</p>
              <p className="text-xs line-through">$ 34.95</p>
            </div>
        </div>
        <div>
            <img src={bannerproduct4} className="w-56 rounded-lg" alt="" />
            <p className="text-xs my-3 ">Army Green Active Short Sleeve</p>
            <div className="flex space-x-2">
              <p className="text-xs">$ 34.95</p>
              <p className="text-xs line-through">$ 34.95</p>
            </div>
        </div>
        <div>
            <img src={bannerproduct3} className="w-56 rounded-lg" alt="" />
            <p className="text-xs my-3 ">Army Green Active Short Sleeve</p>
            <div className="flex space-x-2">
              <p className="text-xs">$ 34.95</p>
              <p className="text-xs line-through">$ 34.95</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
