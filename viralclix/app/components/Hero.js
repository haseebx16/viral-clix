import React from 'react'
import { font2 } from './font/poppins'
import { font } from './font/titan'

const Hero = () => {
  return (
    <div className={`${font2.className} min-h-screen bg-green-100 flex items-center justify-center flex-col`}>
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
          <div className="block max-w-sm p-6 bg-opacity-50 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-4 sm:mb-0 sm:mr-4">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Custom Characters</h5>
          </div>
          <div className="block max-w-sm p-6 bg-opacity-50 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-4 sm:mb-0 sm:mr-4">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Custom Avatars 3D</h5>
          </div>
          <div className="block max-w-sm p-6 bg-opacity-50 bg-white backdrop-blur-lg border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Anime Characters</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
