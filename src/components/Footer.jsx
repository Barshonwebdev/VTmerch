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
          {/* <nav className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </nav> */}
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
