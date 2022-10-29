import React from "react";
import ss2 from "../../../assets/ss2.png";


export default function Section11() {
  return (
    <div>
      <div className="lg:flex justify-center items-center ml-10 lg:pb-30 lg:pt-40 pt-20 ">
      <div className="mr-12 lg:mr-0 lg:pr-9">
        <img src={ss2} alt="" />
      </div>

        <div className=" mt-10 lg:mt-0 developers">
          <h3 className="text-4xl lg:mb-5 mb-3 font-semibold">
          Beautiful user experience
          </h3>
          <p>
            {""}
            Our simple front-end module streamlines your onboarding<br/> experience
          </p>
          <div className="mt-10">
          <button className="px-12 lg:px-14 py-3  bg-white text-black rounded-md border border-transparent hover:border-gray-500 btn1 ">
          
             <span>Plaid link</span> 
        
          </button>
        </div></div>
      
    </div>
    </div>
  );
}
