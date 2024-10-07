import React from 'react';
import { font2 } from './font/poppins';
import { font } from './font/titan';
import Link from 'next/link';

const Portfolio = () => {
  return (
    <div
      className={`${font2.className} min-h-screen pt-12`}
      style={{
        backgroundImage: 'url("/stars.gif")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='flex-col flex justify-center items-center p-12'>
        <p className={`${font.className} text-5xl sm:text-6xl text-center sm:text-left sm:ml-12 text-green-300`}>
          Portfolio
        </p>
        <div className='text-center text-white max-w-md sm:max-w-4xl mx-auto mt-4'>
          <p>Explore our range of custom artwork services including Furry Art, Anime Art, Custom OC's & Much More!</p>
        </div>
      </div>

      <div className='flex-col flex justify-center items-center'>
        <p className={`${font.className} text-5xl sm:text-6xl text-center sm:text-left text-green-300`}>
          2D<span className='text-white'>&nbsp;Art</span>
        </p>
        <div className='text-center text-white max-w-md sm:max-w-sm mx-auto'>
          <p>A Diverse Collection of our exquisite 2D Art :3</p>
        </div>
      </div>

      <div className='flex flex-wrap justify-center mt-12'>
        <div className='flex flex-col items-center mx-2 mb-4 sm:mb-6'> {/* Added mb-4 */}
          <Link href="/services/2d"><img src='/2d-1.jpeg' className='w-full h-80 md:hover:h-96 duration-300 rounded-lg shadow-green-200 shadow-lg' /></Link>
        </div>
        <div className='flex flex-col items-center mx-2 mb-4 sm:mb-6'> {/* Added mb-4 */}
          <Link href="/services/2d"><img src='/2d-art-4.png' className='w-full h-80 md:hover:h-96 duration-300 shadow-green-200 shadow-lg rounded-lg' /></Link>
        </div>
        <div className='flex flex-col items-center mx-2 mb-4 sm:mb-6'> {/* Added mb-4 */}
          <Link href="/services/2d"><img src='/2d-art-5.jpg' className='w-full h-80 md:hover:h-96 duration-300 shadow-green-200 shadow-lg rounded-lg' /></Link>
        </div>
      </div>

      <div className='flex flex-col justify-center sm:flex sm:flex-row sm:space-x-6 sm:space-y-0 items-center space-y-6 rounded-md mt-12'>
        <Link href="/services/2d"><img src='/dragon-2d.png' className='md:w-auto w-80 h-80 md:hover:h-96 duration-300 shadow-green-200 shadow-lg rounded-lg mb-12' /></Link>
      </div>

      <div className='flex-col flex justify-center items-center mt-12'>
        <p className={`${font.className} text-5xl sm:text-6xl text-center sm:text-left text-green-300`}>
          3D<span className='text-white'>&nbsp;Art</span>
        </p>
        <div className='text-center text-white max-w-md sm:max-w-sm mx-auto'>
          <p>A Diverse Collection of our exquisite 3D Art :3</p>
        </div>
      </div>

      <div className='flex flex-wrap justify-center mt-12'>
        <div className='flex flex-col items-center mx-2 mb-4 sm:mb-6'> {/* Added mb-4 */}
          <Link href="/services/3d"><img src='/3d-1.jpeg' className='md:w-full w-64 h-80 md:hover:h-96 duration-300 rounded-lg shadow-green-200 shadow-lg' /></Link>
        </div>
        <div className='flex flex-col items-center mx-2 mb-4 sm:mb-6'> {/* Added mb-4 */}
          <Link href="/services/3d"><img src='/3d-2.jpeg' className='md:w-full w-64 h-80 md:hover:h-96 duration-300 shadow-green-200 shadow-lg rounded-lg' /></Link>
        </div>
        <div className='flex flex-col items-center mx-2 mb-4 sm:mb-6'> {/* Added mb-4 */}
          <Link href="/services/3d"><img src='/3d-3.jpeg' className='md:w-full w-64 h-80 md:hover:h-96 duration-300 shadow-green-200 shadow-lg rounded-lg' /></Link>
        </div>
      </div>

      <div className='flex flex-wrap justify-center mt-6 space-x-6'>
        <div className='flex flex-col justify-center sm:flex sm:flex-row sm:space-x-6 sm:space-y-0 items-center space-y-6 rounded-md mt-12'>
          <Link href="/services/3d"><img src='/3d-5.png' className='md:w-auto w-64 h-80 md:hover:h-96 duration-300 shadow-green-200 shadow-lg rounded-lg mb-12' /></Link>
        </div>
        <div className='flex flex-col justify-center sm:flex sm:flex-row sm:space-x-6 sm:space-y-0 items-center space-y-6 rounded-md mt-12'>
          <Link href="/services/3d"><img src='/3d-6.png' className='md:w-auto w-64 h-80 md:hover:h-96 duration-300 shadow-green-200 shadow-lg rounded-lg mb-12' /></Link>
        </div>
      </div>

      <div className='flex-col flex justify-center items-center mt-12'>
        <p className={`${font.className} text-5xl sm:text-6xl text-center sm:text-left text-green-300`}>
          Overlays
        </p>
        <div className='text-center text-white max-w-md sm:max-w-sm mx-auto'>
          <p>A Diverse Collection of our exquisite overlays :3</p>
        </div>
      </div>

      <div className='flex flex-wrap justify-center mt-12 sm:space-y-6 md:space-y-0'>
        <div className='flex flex-col items-center mx-2 mb-4 sm:mb-6'> {/* Added mb-4 */}
          <Link href="/services/overlays"><img src='/overlay-yellow.jpg' className='w-72 h-64 md:w-full md:h-80 md:hover:h-72 duration-300 rounded-lg shadow-green-200 shadow-lg' /></Link>
        </div>
        <div className='flex flex-col items-center mx-2 mb-4 sm:mb-6'> {/* Added mb-4 */}
          <Link href="/services/overlays"><img src='/overlay.jpeg' className='w-72 h-64 md:hover:h-72 md:w-full md:h-80 duration-300 shadow-green-200 shadow-lg rounded-lg' /></Link>
        </div>
      </div>

      <div className='flex-col flex justify-center items-center mt-12'>
        <p className={`${font.className} text-5xl sm:text-6xl text-center sm:text-left text-green-300`}>
          Banners
        </p>
        <div className='text-center text-white max-w-md sm:max-w-sm mx-auto'>
          <p>A Diverse Collection of our exquisite Banners :3</p>
        </div>
      </div>

      <div className='flex flex-wrap justify-center mt-12 sm:space-y-6 md:space-y-0'>
        <div className='flex flex-col items-center mx-2 mb-4 sm:mb-6'> {/* Added mb-4 */}
          <Link href="/services/banners"><img src='/banner-1.jpeg' className='md:w-full md:h-80 w-72 h-54 md:hover:h-72 duration-300 rounded-lg shadow-green-200 shadow-lg' /></Link>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
