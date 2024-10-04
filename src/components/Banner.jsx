import React from "react";
import "./banner.css";
import logo from "../assets/Logo/Valuetainment.svg";
import slogan from '../assets/img/img (1).jpeg'
const Banner = () => {
  return (
    <div className=" text-white px-7 pt-5 ">
      <div className="flex justify-between ">
        <div className="flex space-x-3">
        <img className="w-10 logo " src={logo} alt="" />
        <h1 className="text-6xl font-bold">VTMERCH</h1>
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
      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Banner;
