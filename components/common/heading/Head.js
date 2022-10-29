import React from 'react'

import Plaid from "../../../assets/plaid.png";

export default function Head() {
  return (
    <>
    <section className=' head'>
        <div className='w-screen h-[90px] flex bg-white drop-shadow-lg mb-0 '>
            <div className='flex items-center justify-between ml-5 pl-4'>
               <div> <img className="w-14 h-10" src={Plaid} alt="" /></div>
               <div><h1 className="text-4xl font-semibold ml-2"> <span>PLAID</span> </h1>
               </div>
            </div>
            <div className="lg:flex items-center justify-between lg:gap-10 lg:pl-24  ">
            <div className="hidden lg:block"> <a>Products</a></div> 
            <div className="hidden lg:block"> <a>Use cases</a></div> 
            <div className="hidden lg:block"> <a>Pricing</a></div> 
            <div className="hidden lg:block"> <a>For developers</a></div> 
            <div className="hidden lg:block"> <a>About us</a></div> 
            <div className="hidden lg:block"> <a>For developers</a></div>
            </div>
            <div className='lg:flex items-center justify-between lg:gap-10 lg:pl-28 lg:pr-4'>
              <div className="hidden lg:block"><a>Login</a></div>
              <div className="hidden lg:block"><button className=" lg:px-20 lg:py-3 lg:pl-5  lg:mb-0 mt-5 lg:mt-0 ml-8 bg-black text-white rounded-md border border-transparent hover:border-gray-500 btn2"><span>Get API keys</span></button></div>
              </div>
          
        </div>

    </section>
    </>
  )
}
