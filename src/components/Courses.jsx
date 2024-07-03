import React from "react";
import web from '../assets/web-dev.svg';
import app from '../assets/App-dev.svg';
import graphic from '../assets/graphic.svg';
import digital from '../assets/digital.svg';

export default function Courses() {
  return (
    <div id="courses" className="flex flex-col justify-center items-center pt-20 mb-16">
      <div className="mb-8">
        <h2 className="title text-3xl sm:text-4xl font-bold text-center">
          Our <span className="text-emerald-700">Courses</span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 md:px-32 text-center w-full max-w-7xl">
        <div className="box bg-white p-4 sm:p-6 md:p-8 shadow-lg rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition ease-out delay-100">
          <div className="mb-2">
            <img src={web} alt="Web Development" className="mx-auto" style={{ width: "calc(100% - 120px)", height: "calc(100% - 120px)" }} />
          </div>
          <h2 className="text-lg font-semibold mb-2">Web Development</h2>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laborum reiciendis ea.
          </p>
        </div>

        <div className="box bg-white p-4 sm:p-6 md:p-8 shadow-lg rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition ease-out delay-100">
          <div className="mb-2">
            <img src={app} alt="App Development" className="mx-auto" style={{ width: "calc(100% - 120px)", height: "calc(100% - 120px)" }} />
          </div>
          <h2 className="text-lg font-semibold mb-2">App Development</h2>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laborum reiciendis ea.
          </p>
        </div>

        <div className="box bg-white p-4 sm:p-6 md:p-8 shadow-lg rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition ease-out delay-100">
          <div className="mb-2">
            <img src={graphic} alt="Graphic Design" className="mx-auto" style={{ width: "calc(100% - 120px)", height: "calc(100% - 120px)" }} />
          </div>
          <h2 className="text-lg font-semibold mb-2">Graphic Design</h2>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laborum reiciendis ea.
          </p>
        </div>

        <div className="box bg-white p-4 sm:p-6 md:p-8 shadow-lg rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition ease-out delay-100">
          <div className="mb-2">
            <img src={digital} alt="Digital Marketing" className="mx-auto" style={{ width: "calc(100% - 120px)", height: "calc(100% - 120px)" }} />
          </div>
          <h2 className="text-lg font-semibold mb-2">Digital Marketing</h2>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laborum reiciendis ea.
          </p>
        </div>
      </div>
    </div>
  );
}
