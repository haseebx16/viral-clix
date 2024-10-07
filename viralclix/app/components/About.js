import React from 'react'
import { font2 } from './font/poppins'
import { font } from './font/titan'

const About = () => {
  return (
    <div
      className={`${font2.className} min-h-screen`} style={{
        backgroundImage: 'url("/stars.gif")', // Reference the GIF in the public folder
        backgroundSize: 'cover', // Makes sure the background covers the entire area
        backgroundPosition: 'center', // Centers the background
        backgroundRepeat: 'no-repeat', // Prevents repeating the GIF
      }}
      
    >
      <div className='flex-col flex sm:flex sm:flex-row sm:justify-between justify-center items-center'>
        <p className={`${font.className} text-green-300 text-4xl sm:text-6xl sm:ml-12 mt-12`}>
          Your One Stop{' '}
          <p className='text-yellow-300 sm:text-6xl text-4xl'>Artist's Web</p>
        </p>
        <div className='text-center text-white max-w-72 md:max-w-md mx-auto mt-4'>
          <p>
            Welcome to ViralClix, where we bring your creative visions to life with custom designed
            artworks including furry art, 2D OC art, anime art, and more.
          </p>
        </div>
      </div>

      <div className='flex-col flex sm:flex-row sm:space-x-12 sm:space-y-0 sm:mt-12 justify-center items-center mt-8 space-y-4'>
        <p className={`${font.className} text-yellow-300 text-4xl`}>
          200+ <p className={`${font2.className} text-white text-sm w-32 whitespace-nowrap`}>Clients Satisfied</p>
        </p>
        <p className={`${font.className} text-yellow-300 text-4xl`}>
          400+ <p className={`${font2.className} text-white text-sm w-32 whitespace-nowrap`}>Projects Completed</p>
        </p>
      </div>
      <div className='flex flex-col justify-center sm:flex pb-12 sm:flex-row sm:space-x-6 sm:space-y-0 items-center space-y-6 rounded-md mt-12'>
          {/* <img src='/3d-1.jpeg' className='w-auto h-80 rounded-lg shadow-lg  md:hover:h-96 duration-300 shadow-green-200 '/> */}
          {/* <img src='/3d-2.jpeg' className='w-auto h-80 rounded-lg shadow-lg md:hover:h-96 duration-300 shadow-green-200'/> */}
          {/* <img src='/3d-3.jpeg' className='w-auto h-80 rounded-lg shadow-lg md:hover:h-96 duration-300 shadow-green-200'/> */}
      </div>     
    </div>
  )
}

export default About
