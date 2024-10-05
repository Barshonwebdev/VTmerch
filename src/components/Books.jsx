import React from "react";
import "./books.css";
import { FaArrowRight } from "react-icons/fa6";
import signature from '../assets/img/pat-signature White 1.png'
import book1 from '../assets/img/Choose-Your-Enemies.png'
import book2 from '../assets/img/img (8).png'
const Books = () => {
  return (
    <div className=" books ">
      <div className="px-12 py-16 text-white flex flex-col md:flex-row justify-between">
        <div className="space-y-2">
            <p className="text-2xl book-font ">PATRICK BET-DAVID'S</p>
            <p className="text-3xl book-font bg-gradient-to-b from-red-600 to-red-500 text-transparent bg-clip-text font-bold">SIGNED</p>
            <p className="text-3xl book-font bg-gradient-to-b from-red-600 to-red-500 text-transparent bg-clip-text font-bold">COLLECTION</p>
            <div>
                <button className="transition ease-in delay-100 hover:scale-110 btn mt-10 px-8 bg-white text-black rounded-xl py-0 book-font">SHOP NOW <FaArrowRight></FaArrowRight> </button>
            </div>
            <div className="">
                <img className="  mt-8" src={signature} alt="" />
            </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-end lg:me-16 lg:space-x-4">
            <img className="transition ease-in delay-100 hover:scale-110 md:w-52 lg:w-64" src={book1} alt="" />
            <img className="transition ease-in delay-100 hover:scale-110 relative left-5 md:left-0 md:w-1/2 lg:w-1/3" src={book2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Books;
