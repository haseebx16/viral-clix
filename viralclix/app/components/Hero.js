import React from 'react'
import { font2 } from './font/poppins'
import { font } from './font/titan'
import Link from 'next/link'

const Hero = () => {
  return (
    <div
      className={`${font2.className} min-h-screen p-12 flex items-center justify-center flex-col`}
      style={{
        backgroundImage: 'url("/bg-gif.gif")', // Reference the GIF in the public folder
        backgroundSize: 'cover', // Makes sure the background covers the entire area
        backgroundPosition: 'center', // Centers the background
        backgroundRepeat: 'no-repeat', // Prevents repeating the GIF
      }}
    >
      <div className='pb-24 w-full'>
        <div className='text-white text-center mt-12'>
          <p className={`${font.className} text-6xl sm:text-8xl text-green-400`}>
            Viral<span className='text-white'>Clix</span>
          </p>
        </div>
        <div className='text-center max-w-md mx-auto'>
          <p className='sm:text-2xl text-center text-white'>
            Get personalized furry, anime, and 2D/3D character designs for your projects.
          </p>
        </div>
        <div className='flex flex-col sm:flex-row text-white justify-center items-center mt-16'>
          <Link href="/services"><div className="block max-w-sm p-6 w-80 text-white h-32 hover:bg-green-800 duration-300 hover:text-white bg-opacity-50 bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-4 sm:mb-0 sm:mr-4">
            <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">Custom Characters</h5>
            <p>Unique and creative character designs tailored to your vision.</p>
          </div></Link>
          <Link href="/services"><div className="block max-w-sm p-6 w-80 h-32 hover:bg-green-800 duration-300 hover:text-white bg-opacity-50 bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-4 sm:mb-0 sm:mr-4">
            <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">Custom Avatars 3D</h5>
            <p>High-Quality Artwork</p>
          </div></Link>
          <Link href="/services"><div className="block max-w-sm p-6 w-80 h-32 hover:bg-green-800 duration-300 hover:text-white bg-opacity-50 bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-4 sm:mb-0 sm:mr-4">
            <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">Anime Characters</h5>
            <p>Unique and creative character designs tailored to your vision.</p>
          </div></Link>
        </div>
        <div className='sm:flex sm:flex-row mt-8 sm:space-x-4 sm:space-y-0 space-y-4 justify-center flex items-center flex-col'>
          <Link href="/gallery"><button className='p-2 rounded-full bg-green-800 hover:bg-green-600 duration-300 w-60 whitespace-nowrap text-white shadow-md shadow-black'>
            See Our Gallery !
          </button></Link>
          <Link href="/services"><button className='p-2 rounded-full hover:bg-gray-700 duration-300 bg-black w-60 text-white shadow-md shadow-black'>
            We design Characters !
          </button></Link>
        </div>
        <hr className="my-8 border-t-4 p-2 border-gray-400 w-full" />
      </div>
    </div>
  )
}

export default Hero
