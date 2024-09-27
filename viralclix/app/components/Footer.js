import React from 'react'
import { font } from './font/titan'
import { font2 } from './font/poppins'
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaBehanceSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={`${font.className} bg-black flex items-center justify-center flex-col`}>
      <div className='flex-col flex sm:w-full sm:flex sm:flex-row sm:justify-between justify-center items-center'>
        <p className={`${font.className} text-green-300 text-4xl sm:text-4xl sm:ml-12 mt-12`}>
          Viral<span className='text-white sm:text-4xl text-4xl'>Clix</span>  
        </p>
        <div className={`${font2.className} text-center text-xs text-white max-w-md mx-auto mt-4`}>
          <p>
            Welcome to ViralClix, where we bring your creative visions to life with custom designed
            artworks including furry art, 2D OC art, anime art, and more.
          </p>
        </div>
      </div>
      <div className='flex justify-center sm:justify-start sm:ml-16 space-x-3 mt-6'>
        <FaFacebook className='text-green-300 text-2xl' />
        <FaBehanceSquare className='text-green-300 text-2xl' />
        <AiFillInstagram className='text-green-300 text-2xl' />
      </div>
      <div className='justify-center items-center flex flex-col mt-12'>
        <p className='text-yellow-300 text-center'>Contact<br/><span className={`${font2.className} text-white text-xs`}>info@viralclix.com</span></p>
        <p className='text-yellow-300 mt-8 text-center'>Custom Art Work Request</p>
        <input type='text' placeholder='Your Request' className='bg-gray-100 rounded-full p-2'/>
        <button className='bg-green-400 text-white p-2 mt-2 px-4 rounded-full'>Submit</button>
      </div>
    </div>
  )
}

export default Footer
