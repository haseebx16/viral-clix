import React from 'react'
import { font2 } from './font/poppins'
import { font } from './font/titan'

const About = () => {
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
      <div className='flex-col flex sm:flex sm:flex-row sm:justify-between justify-center items-center'>
        <p className={`${font.className} text-green-300 text-5xl sm:text-7xl sm:ml-12 mt-12`}>
          Your One Stop{' '}
          <p className='text-yellow-300 sm:text-7xl text-5xl'>Artist's Web</p>
        </p>
        <div className='text-center text-white max-w-md mx-auto mt-4'>
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

      <div className='mt-12 flex-col flex justify-center items-center'>
        <p className={`${font.className} text-5xl sm:text-6xl text-center sm:text-left sm:ml-12 text-green-300`}>
          Customised <br />
          <span className='text-white'>Art On Orders</span>
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
    </div>
  )
}

export default About
