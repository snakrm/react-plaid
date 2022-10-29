import React from "react";
import ls2 from "../../../assets/ls2.png";
import ls1 from "../../../assets/ls1.png";
import ls3 from "../../../assets/ls3.png";


export default function Section2() {
  return (
    <div>
      <h1 className="text-5xl mb-3 lg:mb-10 font-semibold ml-10 lg:ml-24 mt-24 tracking-wide">Build the future<br/>
of financial services</h1>
    <div className="lg:flex justify-center  mt-20">
      <div className="lg:flex items-center lg:pl-10 lg:pt-45 ">
        <div className="ml-24 lg:ml-0">
          <img src={ls2} alt="" /> 
        </div>
        <div className="lg:pl-10 pl-20">
          <h3 className="text-4xl mb-3 font-semibold">Lending</h3>
          <div className="pt-8">
            <p>
              Help businesses manage their <br />
              expenses, pay bills, do bookkeeping, and send payroll
            </p>
          </div>
          <div className="lg:mt-10 mt-5 mb-10 lg:mb-0">
            <button className="px-12 py-3  bg-gray-100 text-black rounded-md border border-transparent hover:border-gray-900 btn1">
              
               <span> Learn more </span> 
              
            </button>
          </div>
        </div>
      </div>

      <div className="lg:flex items-center lg:pl-10  lg:pt-45 mt-10 lg:mt-0">
        <div className="ml-24 lg:ml-0 ">
          <img src={ls1} alt="" />
        </div>
        <div className=" ml-20 lg:ml-10">
          <h3 className="text-4xl mb-3 font-semibold">Banking</h3>
          <div className="pt-8">
            <p >
            Help businesses manage their <br />expenses, pay bills, do
                    bookkeeping, <br />
                    and send payroll
            </p>
          </div>
          <div className="lg:mt-10 mt-5 mb-10 lg:mb-0">
            <button className="px-12 py-3  bg-gray-100 text-black rounded-md  border border-transparent hover:border-gray-900 btn1">
              
               <span> Learn more </span>
              
            </button>
          </div>
        </div>
      </div>
    </div>



    <div className="lg:flex items-center lg:pl-20 lg:pt-28 lg:pb-32 pb-24 pt-10 ">
        <div className="pl-24 ">
          <img src={ls3} alt="" />
        </div>
        <div className="lg:pl-10 pl-24 pt-0">
          <h3 className="text-4xl lg:mb-3 font-semibold">Wealth</h3>
          <div className="pt-8">
            <p>
            Help people send money and pay bills
            </p>
          </div>
          <div className="lg:mt-10 mt-5 mb-10 lg:mb-0">
            <button className="px-12 py-3  bg-gray-100 text-black rounded-md border border-transparent hover:border-gray-900 btn1">
              
               <span> Learn more </span>
            
            </button>
          </div>
        </div>
     </div>
     
      </div>
  
  );
}