import React from "react";
import "./quote.css";
import quote from "../assets/Icon/quotes.svg";
import pat from "../assets/img/img (5).png";
const Quote = () => {
  return (
    <div className="quote flex flex-col md:flex-row items-center justify-center px-5 md:justify-between md:px-12 bg-gradient-to-r  from-red-600 to-red-700 text-white font-bold text-md md:text-2xl  ">
      <div className="order-2 md:order-1">
        <div>
          <img src={quote} className="w-1/6 " alt="" />
        </div>
        <div className="flex flex-col mx-5 tracking-wider relative -top-8 ">
          <p className="uppercase">Our mission is to enlighten, entertain</p>
          <p className="uppercase">and empower current and future </p>
          <p className="uppercase">leaders around the world. </p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/3 relative -top-14 flex justify-center items-center md:right-8 order-1 md:order-2  ">
        <img src={pat} alt="" />
      </div>
    </div>
  );
};

export default Quote;
