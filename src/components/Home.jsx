import React from "react";
import img from '../assets/hero.svg';
import Button from "./add/Button";

export default function Home() {
  return (
    <div className="pt-16 mt-20 md:mt-40 w-full px-4 sm:px-8 md:px-16 lg:px-32 flex flex-col md:flex-row justify-between items-center">
      <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">
        <div className="mb-7">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl pb-2">Knowledge with</p>
          <span className="text-emerald-600 font-bold text-3xl sm:text-4xl md:text-5xl">eStudy</span>
        </div>
        <div className="mb-8">
          <p className="text-base sm:text-lg md:text-xl">
            eStudy is your gateway to a world of limitless learning possibilities.
            With our cutting-edge eLearning platform, you can explore a vast
            library of courses, from academic subjects to practical skills, all
            designed to help you achieve your goals.
          </p>
        </div>
        <div>
          <Button />
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img src={img} alt="Hero" className="w-full max-w-md" />
      </div>
    </div>
  );
}



