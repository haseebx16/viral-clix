import React from 'react'
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { font } from './font/titan';
import { font2 } from './font/poppins';

const Footer = () => {
  return (
    <div className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-start px-4 sm:px-12">

        <div className="sm:w-1/3 text-center sm:text-left">
          <p className={`${font.className} text-green-300 text-5xl mb-2`}>Viral<span className="text-white">Clix</span></p>
          <p className={`${font2.className} text-sm text-white leading-relaxed`}>
            Furry Art, Reference Sheets, 2D 3D VR Avatars, 2D Vtuber and PNGtuber, Gaming Logo Banners, 
            Emotes and Overlay, Animated Screens.
          </p>
          
          <div className="flex justify-center sm:justify-start space-x-4 mt-4">
            <FaFacebook className="text-green-300 text-2xl" />
            <AiFillInstagram className="text-green-300 text-2xl" />
            <FaTwitter className="text-green-300 text-2xl" />
          </div>
        </div>

        <div className="sm:w-1/3 mt-8 sm:mt-0 text-center sm:text-left flex flex-col justify-center items-center w-full">
          <p className={`${font.className} text-green-300 text-lg mb-2`}>Contact</p>
          <p className={`${font2.className} text-white text-sm`}>info@viralclix.com</p>
        </div>

        <div className="sm:w-1/3 mt-8 sm:mt-0 flex flex-col justify-center w-full text-center sm:text-left">
          <p className={`${font.className} text-green-400 text-lg mb-2`}>Ideas</p>
          <p className={`${font2.className} text-sm mb-4`}>Custom Artwork Request Form</p>

          <input
            type="text"
            placeholder="Enter your artwork ideas here"
            className="w-full p-2 rounded-full bg-white text-gray-800"
          />
          <button className={`${font2.className} bg-green-400 text-white px-4 py-2 rounded-full mt-4`}>
            Submit Request
          </button>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-400">
        © 2024. All rights reserved.
      </div>
    </div>
  )
}

export default Footer;
