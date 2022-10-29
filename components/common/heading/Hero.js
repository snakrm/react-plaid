import React from "react";
import heroImg from "../../../assets/hero.png";
import { FaChevronRight } from "react-icons/fa";
export default function Hero() {
  return (
    <div>
      <section className="lg:flex items-center lg:mt-20 inset:0 mt-0">
        <img className="hidden lg:block" src={heroImg} alt="" />
        <div className="mt-10 pl-11">
          <h1 className="text-5xl mb-3 font-light text-inherit tracking-wider">
            The safer way for people </h1>
            <h1 className="text-5xl mb-3 font-bold tracking-wider">
            to connect financial<br/> accounts to an app
          </h1>
          <p className="mt-10 text-lg pr-[50px] ">
            {" "}
            Plaid provides developers with the tools they need to create easy
            and accessible experiences for their users. Today, tens of millions
            of people in North America (and counting) have successfully
            connected their financial institutions to apps they love using
            Plaid.
          </p>
          <div className="lg:flex items-center mt-10 gap-3">
            <button className="px-20 py-3 pl-5 mb-10 lg:mb-0 bg-black text-white rounded-md border border-transparent hover:border-gray-500 btn2">
  
              <span>  Get API keys </span>
        
            </button>
            <p>
             <span className="font-semibold">Start building with Plaid's APIs for free.</span> 
              <br />
              Questions?<u>Contact our sales team</u>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
