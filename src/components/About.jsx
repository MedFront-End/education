import React from "react";
import Button from "./add/Button";
import img from '../assets/Office.png';

export default function About() {
  return (
    <div id="about" className="mt-16 md:mt-32 mb-12 md:mb-28 px-4 sm:px-8 md:px-16 lg:px-32 py-32">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-2/5 mb-8 md:mb-0 text-center">
          <img className="w-full" src={img} alt="Office" />
        </div>
        <div className="w-full md:w-1/2 md:text-left text-center">
          <h2 className="text-3xl sm:text-4xl font-bold pb-3 text-center">
            About <span className="text-emerald-700">Us</span>
          </h2>
          <p className="pb-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore vitae veniam alias provident quidem rerum temporibus possimus laudantium, deserunt voluptate quaerat,
            nemo aperiam dolorem neque.
          </p>
          <div className="flex justify-center">
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}

