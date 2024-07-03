import React from "react";
import pic1 from '../assets/images/pic1.png';
import pic2 from '../assets/images/pic2.png';
import pic3 from '../assets/images/pic3.png';

export default function Reviews() {
  return (
    <div className="px-4 md:px-32 py-24">
      <h2 className="title text-3xl sm:text-4xl font-bold text-center mb-8">
        Our <span className="text-emerald-700">Reviews</span>
      </h2>

      {/* container */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* box 1 */}
        <div className="bg-white flex flex-col justify-between w-full md:w-1/3 p-5 shadow-lg rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all  cursor-pointer">
          <p className="flex-grow mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, perferendis repudiandae veritatis atque nihil sunt impedit ab quae consectetur quasi
            quos quaerat ea ipsam harum.
          </p>
          <div className="flex justify-center">
            <img src={pic1} alt="img" className="w-1/2" />
          </div>
        </div>

        {/* box 2 */}
        <div className="bg-white flex flex-col justify-between w-full md:w-1/3 p-5 shadow-lg rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all  cursor-pointer">
          <p className="flex-grow mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, perferendis repudiandae veritatis atque nihil sunt impedit ab quae consectetur quasi
            quos quaerat ea ipsam harum.
          </p>
          <div className="flex justify-center">
            <img src={pic2} alt="img" className="w-1/2" />
          </div>
        </div>

        {/* box 3 */}
        <div className="bg-white flex flex-col justify-between w-full md:w-1/3 p-5 shadow-lg rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all  cursor-pointer">
          <p className="flex-grow mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, perferendis repudiandae veritatis atque nihil sunt impedit ab quae consectetur quasi
            quos quaerat ea ipsam harum.
          </p>
          <div className="flex justify-center">
            <img src={pic3} alt="img" className="w-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
}
