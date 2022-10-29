import React from "react";
import picnew from "../../../assets/picnew.png";
// import { FaChevronRight } from "react-icons/fa";

export default function Section1() {
  return (
    <div>
      <div className="lg:flex justify-center items-center ml-10 lg:pb-30 lg:pt-40 pt-20 ">
        <div className="developers">
          <h3 className="text-4xl lg:mb-5 mb-3 font-semibold">
            For developers, by developers
          </h3>
          <p>
            {""}
            With just a few lines of code, you can implement
            <br /> Plaid in an afternoon.
          </p>
          <div className="mt-10">
          <button className="px-12 lg:px-14 py-3  bg-white text-black rounded-md border border-transparent hover:border-gray-500 btn1 ">
          
             <span>Read our API documentation </span> 
        
          </button>
        </div></div>
      <div className="mr-12 lg:mr-0">
        <img src={picnew} alt="" />
      </div>
    </div>
    </div>
  );
}
