import React from "react";
import { CiMail, CiPhone } from "react-icons/ci";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-emerald-700 text-center text-white py-8">
      {/* social media */}
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-32 pb-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="email flex items-center gap-2">
            <CiMail size={24} /> learnefromeStudy@gmail.com
          </p>
          <p className="number flex items-center gap-2">
            <CiPhone size={24} /> +999 689232356
          </p>
          <p className="instagram flex items-center gap-2">
            <FaInstagram size={24} /> @_eStudy
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="facebook flex items-center gap-2">
            <FaFacebook size={24} /> eStudy Academy
          </p>
          <p className="tiktok flex items-center gap-2">
            <FaTiktok size={24} /> eStudy_academy
          </p>
        </div>
      </div>

      <div className="pb-4">
        <a href="#" className="text-white hover:underline">Privacy Policy</a> | 
        <a href="#" className="text-white hover:underline"> Terms of Service</a> | 
        <a href="#" className="text-white hover:underline"> Cookies Policy</a> | 
        <a href="#" className="text-white hover:underline"> Cookies Policy</a>
      </div>

      <div>Copyright © 2024 eStudy</div>
    </div>
  );
}

