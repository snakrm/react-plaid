import React from "react";
import {  FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";


export default function Footer() {
  return (
    <div className="w-screen h-full  bg-black ">
      <div className=" lg:flex items-center justify-center gap-6 pt-12 pb-20">
        <div className="ml-10 ">
          <h1 className="text-4xl mb-3 font-semibold text-white">Ready to get</h1>
          <h1 className="text-4xl mb-3 font-semibold text-white">started?</h1></div>

          <div>
            <button className="px-8 py-2 mr-3 mt-10 bg-black text-white border-white border-5 rounded-md">
              <span>
                Get API keys</span>
           
            </button>

            <button className="px-8 py-2 mr-3 mt-10 bg-white text-black rounded-md">
          <span>
                Contact sales</span>
              
            </button>
          
        </div></div>
         

         <div className=" lg:flex items-center justify-center gap-16">
        <div className=" mt-8 mb-4 pl-8 pr-3 text-white">
          <hr />
          <h5 className="font-semibold">Products</h5>

          <ul>
            <li>
              <a href="#!" className="link">
                Auth
              </a>
            </li>
            <li>
              <a href="#!" className="link">
                Balance
              </a>
            </li>
            <li>
              <a href="#!" className="link">
                Identity
              </a>
            </li>
            <li>
              <a href="#!" className="link">
                Transactions
              </a>
            </li>
            <li>
              <a href="#!" className="link">
                Assets
              </a>
            </li>
            <li>
              <a href="#!" className="link">
                Income
              </a>
            </li>
            <li>
              <a href="#!" className="link">
                investments
              </a>
            </li>
            <li>
              <a href="#!" className="link">
                Liabilities
              </a>
            </li>
            <li>
              <a href="#!" className="link">
                Indentity verification
              </a>
            </li>
            <li>
              <a href="#!" className="link">
                Monitor
              </a>
            </li>
            <li>
              <a href="#!" className="link">
                Global coverage
              </a>
            </li>
            <li>
              <a href="#!" className="link">
                Pricing
              </a>
            </li>
          </ul>
        </div>

        <div className=" mt-8 mb-4 pl-5 pr-3 text-white">
          <hr />
          <h5 className="font-semibold">Use cases</h5>

          <ul>
            <li>
              <a href="#!" className="link">
                Personal finances
              </a>
            </li>
            <li>
              <a href="#!" className="link">
                Consumer payments
              </a>
            </li>
            <li>
              <a href="#!" className="link">
                Lending
              </a>
            </li>
            <li>
              <a href="#!" className="link">
                Banking
              </a>
            </li>
            <li>
              <a href="#!" className="link">
                Wealth
              </a>
            </li>
            <li>
              <a href="#!" className="link">
                Business finances
              </a>
            </li>
            <li>
              <a href="#!" className="link">
                Customer stories
              </a>
            </li>
          </ul>
          <br />
          <h5 className="font-semibold">For developers</h5>
          <hr />
          <ul>
            <li>
              <a href="#!" className="link">
                Quickstart
              </a>
            </li>
            <li>
              <a href="#!" className="link">
                API documentation
              </a>
            </li>
            <li>
              <a href="#!" className="link">
                libraries
              </a>
            </li>
          </ul>
        </div>

        <div className=" mt-8 mb-4 pl-5 pr-3 text-white">
          <hr />
          <h5 className="font-semibold">About us</h5>

          <ul>
            <li>
              <a href="#!" className="link">
                Company
              </a>
            </li>
            <li>
              <a href="#!" className="link">
                Careers
              </a>
            </li>
            <li>
              <a href="#!" className="link">
                Blog
              </a>
            </li>
            <li>
              <a href="#!" className="link">
                Contact
              </a>
            </li>
            <li>
              <a href="#!" className="link">
                Partners
              </a>
            </li>
            <li>
              <a href="#!" className="link">
                Press
              </a>
            </li>
            <li>
              <a href="#!" className="link">
                Resources
              </a>
            </li>
            <li>
              <a href="#!" className="link">
                Fin
              </a>
            </li>
            <li>
              <a href="#!" className="link">
                Safety
              </a>
            </li>
            <li>
              <a href="#!" className="link">
                How we handle data
              </a>
            </li>
            <li>
              <a href="#!" className="link">
                Legal & Privacy
              </a>
            </li>
            <li>
              <a href="#!" className="link">
                Plaid link
              </a>
            </li>
          </ul>
        </div>

        <div className=" mt-4 mb-4 pl-5 pr-3 text-white">
          <hr />
          <h5 className="font-semibold">For consumers</h5>

          <ul>
            <li>
              <a href="#!" className="link">
                How it works
              </a>
            </li>
            <li>
              <a href="#!" className="link">
                Discover apps
              </a>
            </li>
            <li>
              <a href="#!" className="link">
                Why is plaid involved?
              </a>
            </li>
            <li>
              <a href="#!" className="link">
                Plaid connecting?
              </a>
            </li>
            <li>
              <a href="#!" className="link">
                Plaid Portal
              </a>
            </li>
            <li>
              <a href="#!" className="link">
                FAQs
              </a>
            </li>
          </ul>
          <br />
          <br />
          <hr />
          <h5 className="font-semibold">For financial institutions</h5>

          <ul>
            <li>
              <a href="#!" className="link">
                Work with us
              </a>
            </li>
            <li>
              <a href="#!" className="link">
                Data connectivity
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="mt-9" />
      <div className="flex social justify-center ">
        <i>
          {" "}
          <FaLinkedin />
        </i>
        <i className="lg:pl-4">
          {" "}
          <FaFacebookSquare />
        </i>
        <i className="lg:pl-4">
          {" "}
          <FaTwitterSquare />
        </i>
      </div>
      <div className="text-sm text-gray-100 text-center pt-11 pb-5">
        © 2022 . All Rights Reserved - Plaid.
      </div>
    </div>
  );
}
