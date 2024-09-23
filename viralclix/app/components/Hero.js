import React from 'react'
import { font2 } from './font/poppins'
import { font } from './font/titan'

const Hero = () => {
  return (
    <div className={`${font2.className} min-h-screen p-12 bg-green-100 flex items-center justify-center flex-col`}>
      <div className='pb-24 w-full'>
        <div className='text-black text-center mt-12'>
          <p className={`${font.className} text-7xl sm:text-9xl text-green-600`}>
            Viral<span className='text-black'>Clix</span>
          </p>
        </div>
        <div className='text-center max-w-md mx-auto'>
          <p className='sm:text-2xl text-center'>Get personalized furry, anime, and 2D/3D character designs for your projects.</p>
        </div>
        <div className='flex flex-col sm:flex-row justify-center items-center mt-16'>
          <div className="block max-w-sm p-6 w-80 h-32 hover:bg-green-800 duration-300 hover:text-white bg-opacity-50 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-4 sm:mb-0 sm:mr-4">
            <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">Custom Characters</h5>
            <p>Unique and creative character designs tailored to your vision.</p>
          </div>
          <div className="block max-w-sm p-6 w-80 h-32 hover:bg-green-800 duration-300 hover:text-white bg-opacity-50 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-4 sm:mb-0 sm:mr-4">
            <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">Custom Avatars 3D</h5>
            <p>High-Quality Artwork</p>
          </div>
          <div className="block max-w-sm p-6 w-80 h-32 hover:bg-green-800 duration-300 hover:text-white bg-opacity-50 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-4 sm:mb-0 sm:mr-4">
            <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">Anime Characters</h5>
            <p>Unique and creative character designs tailored to your vision.</p>
          </div>
        </div>
        <div className='sm:flex sm:flex-row mt-8 sm:space-x-4 sm:space-y-0 space-y-4 justify-center flex items-center flex-col'>
          <button className='p-2  rounded-full bg-green-800 w-60 whitespace-nowrap text-white shadow-md shadow-black'>
            Payment Plans Offered !
          </button>
          <button className='p-2 rounded-full bg-black w-60 text-white shadow-md shadow-black'>
            We design Characters !
          </button>
        </div>
        <hr className="my-8 border-t-4 p-2 border-gray-400 w-full" />
      </div>
    </div>
  )
}

export default Hero
