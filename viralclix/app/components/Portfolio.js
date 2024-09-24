import React from 'react'
import { font2 } from './font/poppins'
import { font } from './font/titan'

const Portfolio = () => {
  return (
    <div
      className={`${font2.className} min-h-screen`}
      style={{
        backgroundImage: 'url("/about.gif")', // Reference the GIF in the public folder
        backgroundSize: 'cover', // Makes sure the background covers the entire area
        backgroundPosition: 'center', // Centers the background
        backgroundRepeat: 'no-repeat', // Prevents repeating the GIF
      }}
    >
      <div className='flex-col flex justify-center items-center'>
        <p className={`${font.className} text-5xl sm:text-6xl text-center sm:text-left sm:ml-12 text-green-300`}>
          Port<span className='text-white'>folio</span>
        </p>
        <div className='text-center text-white max-w-md sm:max-w-4xl mx-auto mt-4'>
          <p>Explore our range of custom artwork services including Furry Art, Anime Art, Custom OC's & Much More !</p>
        </div>
        <div className='flex-col flex justify-center items-center mt-12'>
          <p className={`${font.className} text-yellow-300 text-xl`}>2D and 3D Animation</p>
          <div className='text-center text-white max-w-md sm:max-w-sm mx-auto'>
            <p>We specialize in creating 2D and 3D avatars and VTubing models for virtual presence.</p>
          </div>
        </div>
      </div>
      <div className='flex-col mt-16 flex justify-center items-center'>
        <p className={`${font.className} text-5xl sm:text-6xl text-center sm:text-left sm:ml-12 text-green-300`}>
          2D<span className='text-white'>&nbsp;Art</span>
        </p>
        <div className='text-center text-white max-w-md sm:max-w-sm mx-auto'>
            <p>A Diverse Collection of our exquisite 2D Art :3</p>
          </div>
        </div>  
    </div>
  )
}

export default Portfolio
