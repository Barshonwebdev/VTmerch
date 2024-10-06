import React from "react";
import "./footer.css";
import logo from "../assets/Logo/Valuetainment.svg";
import card1 from '../assets/Icon/visa 1.svg'
import card2 from '../assets/Icon/apple-pay 1.svg'
import card3 from '../assets/Icon/diners-club 1.svg'
import card4 from '../assets/Icon/visa 2.svg'
import card5 from '../assets/Icon/amex 1.svg'
import card6 from '../assets/Icon/paypal 1.svg'
import card7 from '../assets/Icon/american-express (1) 1.svg'
import phone from '../assets/Icon/telephone (2) 1.svg'
import mail from '../assets/Icon/email 1.svg'
import fb from '../assets/Icon/facebook (4).svg'
import insta from '../assets/Icon/instagram-logo (1).svg'
import linkedin from '../assets/Icon/linkedin (3).svg'
import twitter from '../assets/Icon/twitter (4).svg'
const Footer = () => {
  return (
    <div className="">
      <div className="px-12 pt-10 space-y-2 bg-black text-white">
      <div className="flex items-center space-x-3 mb-5">
        <img className="w-10 footer-logo " src={logo} alt="" />
        <h1 className=" text-2xl md:text-6xl font-bold   ">VTMERCH</h1>
        </div>
        
        <footer className="footer border-t text-font border-gray-100 border-opacity-30 pt-10">
          <nav className="">
            <p className="font-bold md:text-lg text-sm ">Subscribe and be the first to receive </p>
            <p className="font-bold md:text-lg text-sm ">notifications about our upcoming releases</p> <p className="font-bold md:text-lg text-sm "> and the latest news. </p>
            <div className="mt-5 w-full space-y-2">
            <button className="transition ease-in delay-100 hover:scale-110 btn bg-black text-white hover:bg-black hover:text-white w-full">Enter your email</button>
            <button className="transition ease-in delay-100 hover:scale-110 btn  w-full">Subscribe</button>
            </div>
          </nav>
          <nav className="space-y-1">
            <h6 className="text-xs footer-title normal-case font-normal  opacity-100">Customer Services</h6>
            <a className="text-xs link link-hover opacity-55">About us</a>
            <a className="text-xs link link-hover opacity-55">Search</a>
            <a className="text-xs link link-hover opacity-55">Privacy Policy</a>
            <a className="text-xs link link-hover opacity-55">Contact Us</a>
            <a className="text-xs link link-hover opacity-55">Terms of Service</a>
            <a className="text-xs link link-hover opacity-55">Refund policy</a>
            <a className="text-xs link link-hover opacity-55">Track Order</a>
          </nav>
          <nav className="space-y-1">
            <h6 className="text-xs footer-title normal-case font-normal  opacity-100">Products</h6>
            <a className="text-xs link link-hover opacity-55">Featured products</a>
            <a className="text-xs link link-hover opacity-55">Bestseller</a>
            <a className="text-xs link link-hover opacity-55">Latest product</a>
            <a className="text-xs link link-hover opacity-55">All collections</a>
            <a className="text-xs link link-hover opacity-55">All products</a>
           
          </nav>
          <nav className="space-y-1">
            <h6 className="text-xs footer-title normal-case font-normal  opacity-100">Contact Us</h6>
            <a className="text-xs link link-hover opacity-55">Available between 8AM to 8PM. Ready <br /> to answer your questions.</a>
            <div className="flex space-x-2">
              <img className="w-4" src={phone} alt="" />
            <a className="text-xs link link-hover opacity-55">013456789</a>
            </div>
            <div className="flex space-x-2">
              <img className="w-4" src={mail} alt="" />
            <a className="text-xs link link-hover opacity-55">store@valuetainment.com</a>
            </div>
            <div className="flex space-x-3">
              <img className="w-4" src={fb} alt="" />
              <img className="w-4" src={twitter} alt="" />
              <img className="w-4" src={linkedin} alt="" />
              <img className="w-4" src={insta} alt="" />
            </div>
          </nav>
          
          
        </footer>
        <footer className="footer pt-12 pb-8 ">
          <aside className="">
           
            <p className="text-gray-500  text-sm">
            © 2024 Valuetainment Store. All rights reserved.
            </p>
          </aside>
         
          <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-1">
              <img src={card1} alt="" />
              <img src={card2} alt="" />
              <img src={card3} alt="" />
              <img src={card4} alt="" />
              <img src={card5} alt="" />
              <img src={card6} alt="" />
              <img src={card7} alt="" />
            </div>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
