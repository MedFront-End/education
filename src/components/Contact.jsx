import React from "react";
import img from '../assets/contact.svg'; 
import Button from "./add/Button"; 

export default function Contact() {
  return (
    <div className="mt-16 md:mt-32 px-4 md:px-32">
      <h2 className="title text-3xl sm:text-4xl font-bold text-center pt-5">
        Contact <span className="text-emerald-700">Us</span>
      </h2>

      {/* content */}
      <div className="pt-2 flex flex-col md:flex-row justify-between items-center">
        {/* inputs */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <div className="w-full md:w-3/5 mb-4">
            <label htmlFor="name">Your Name *</label><br />
            <input 
              id="name"
              className="w-full h-10 p-2 outline-none border border-gray-300 rounded shadow focus:shadow-lg focus:border-emerald-700 transition-shadow duration-200"
              type="text"
              placeholder="Enter your name"
            />
          </div>

          <div className="w-full md:w-3/5 mb-4">
            <label htmlFor="email">Your Email *</label><br />
            <input 
              id="email"
              className="w-full h-10 p-2 outline-none border border-gray-300 rounded shadow focus:shadow-lg focus:border-emerald-700 transition-shadow duration-200"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="w-full md:w-3/5 mb-4">
            <label htmlFor="number">Your Number *</label><br />
            <input 
              id="number"
              className="w-full h-10 p-2 outline-none border border-gray-300 rounded shadow focus:shadow-lg focus:border-emerald-700 transition-shadow duration-200"
              type="text"
              placeholder="Enter your number"
            />
          </div>

          <div className="w-full md:w-3/5 flex justify-center mt-4">
            <Button />
          </div>
        </div>
        {/*end of inputs */}
        
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img src={img} alt="Contact Us" className="w-full max-w-md" />
        </div>
      </div>
    </div>
  );
}



