import React from 'react'
import img from "../../../assets/img.png";
import truebill from "../../../assets/truebill.png";

import acorns from "../../../assets/acornslogo.png";


export default function Content() {

  return (
    <div>
        <div className="w-screen h-auto flex items-center justify-center bg-slate-800 text-white drop-shadow-lg mt-32 ">
        <div className="lg:pr-28 pr-8">
        <img className='hidden lg:block ' src={img} alt="" />
        </div>
        <div>
        <h3 className="text-gray-500 text-sm tracking-widest font-bold lg:pb-16 pb-4 lg:pt-0 pt-10">WHO WE WORK WITH</h3>
        <div className="flex justify-content-between pb-8 lg:pb-8">
        <img className="lg:w-[220px] lg:h-[70px] h-[70px] w-40 mr-8" src={truebill}  alt="" />
        <img className="lg:w-[220px] lg:h-[70px] h-[70px] w-40 mr-8"  src={acorns}  alt="" />
        
        </div>
        <p className='pr-8 lg:pr-0'>
            Plaid provides developers with the tools they need to create easy
            and<br />
            accessible experiences for their users. Today, tens of millions of
            people in <br />North America (and counting) have successfully
            connected their financial<br />
            institutions to apps they love using Plaid.
          </p>
          <button className=' lg:mt-10 mt-6 pl-4  text-left bg-transparent hover:bg-gray-500 text-white-700 font-semibold hover:text-white py-2 px-16 lg:mb-0 mb-5 border border-gray-300 hover:border-transparent rounded  btn2'>
          
           <span>Our products </span> 
            
          </button>
        </div>
        </div>
    </div>
  );
}
