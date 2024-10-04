import React from 'react'
import Nav from '../components/Nav'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Footer from '../components/Footer'
import { font2 } from '../components/font/poppins'
import { font } from '../components/font/titan'
import Link from 'next/link'

const page = () => {
  return (
    <div>
        <Nav/>
        <About/>
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
          Services
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
        <Link href="/services/2d"><div className='flex flex-col items-center mx-2 mb-4 sm:mb-6'> {/* Added mb-4 */}
          <img src='/2d-1.jpeg' className='w-full h-80 md:hover:h-96 duration-300 rounded-lg shadow-green-200 shadow-lg' />
        </div></Link>
        <Link href="/services/2d"><div className='flex flex-col items-center mx-2 mb-4 sm:mb-6'> {/* Added mb-4 */}
          <img src='/2d-art-4.png' className='w-full h-80 md:hover:h-96 duration-300 shadow-green-200 shadow-lg rounded-lg' />
        </div></Link>
        <Link href="/services/2d"><div className='flex flex-col items-center mx-2 mb-4 sm:mb-6'> {/* Added mb-4 */}
          <img src='/2d-art-5.jpg' className='w-full h-80 md:hover:h-96 duration-300 shadow-green-200 shadow-lg rounded-lg' />
        </div></Link>
      </div>

      <Link href="/services/2d"><div className='flex flex-col justify-center sm:flex sm:flex-row sm:space-x-6 sm:space-y-0 items-center space-y-6 rounded-md mt-12'>
        <img src='/dragon-2d.png' className='w-auto h-80 md:hover:h-96 duration-300 shadow-green-200 shadow-lg rounded-lg mb-12' />
      </div></Link>

      <div className='flex-col flex justify-center items-center mt-12'>
        <p className={`${font.className} text-5xl sm:text-6xl text-center sm:text-left text-green-300`}>
          3D<span className='text-white'>&nbsp;Art</span>
        </p>
        <div className='text-center text-white max-w-md sm:max-w-sm mx-auto'>
          <p>A Diverse Collection of our exquisite 3D Art :3</p>
        </div>
      </div>

      <div className='flex flex-wrap justify-center mt-12'>
      <Link href="/services/3d"><div className='flex flex-col items-center mx-2 mb-4 sm:mb-6'> {/* Added mb-4 */}
          <img src='/3d-1.jpeg' className='w-full h-80 md:hover:h-96 duration-300 rounded-lg shadow-green-200 shadow-lg' />
        </div></Link>
        <Link href="/services/3d"><div className='flex flex-col items-center mx-2 mb-4 sm:mb-6'> {/* Added mb-4 */}
          <img src='/3d-2.jpeg' className='w-full h-80 md:hover:h-96 duration-300 shadow-green-200 shadow-lg rounded-lg' />
        </div></Link>
        <Link href="/services/3d"><div className='flex flex-col items-center mx-2 mb-4 sm:mb-6'> {/* Added mb-4 */}
          <img src='/3d-3.jpeg' className='w-full h-80 md:hover:h-96 duration-300 shadow-green-200 shadow-lg rounded-lg' />
        </div></Link>
      </div>

      <div className='flex flex-wrap justify-center mt-6 space-x-6'>
      <Link href="/services/3d"><div className='flex flex-col justify-center sm:flex sm:flex-row sm:space-x-6 sm:space-y-0 items-center space-y-6 rounded-md mt-12'>
          <img src='/3d-5.png' className='w-auto h-80 md:hover:h-96 duration-300 shadow-green-200 shadow-lg rounded-lg mb-12' />
        </div></Link>
        <Link href="/services/3d"><div className='flex flex-col justify-center sm:flex sm:flex-row sm:space-x-6 sm:space-y-0 items-center space-y-6 rounded-md mt-12'>
          <img src='/3d-6.png' className='w-auto h-80 md:hover:h-96 duration-300 shadow-green-200 shadow-lg rounded-lg mb-12' />
        </div></Link>
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
      <Link href="/services/overlays"><div className='flex flex-col items-center mx-2 mb-4 sm:mb-6'> {/* Added mb-4 */}
          <img src='/overlay-yellow.jpg' className='w-full h-80 md:hover:h-72 duration-300 rounded-lg shadow-green-200 shadow-lg' />
        </div></Link>
        <Link href="/services/overlays"><div className='flex flex-col items-center mx-2 mb-4 sm:mb-6'> {/* Added mb-4 */}
          <img src='/overlay.jpeg' className='w-full h-80 md:hover:h-72 duration-300 shadow-green-200 shadow-lg rounded-lg' />
        </div></Link>
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
      <Link href="/services/banners"><div className='flex flex-col items-center mx-2 mb-4 sm:mb-6'> {/* Added mb-4 */}
          <img src='/banner-1.jpeg' className='w-full h-80 md:hover:h-72 duration-300 rounded-lg shadow-green-200 shadow-lg' />
        </div></Link>
      </div>
    </div>
        <Footer/>
    </div>
  )
}

export default page
