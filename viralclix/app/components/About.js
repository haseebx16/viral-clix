"use client";

import React from 'react';
import { font2 } from './font/poppins';
import { font } from './font/titan';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  // Animation variants for fade-in effect
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={`${font2.className} min-h-screen bg-darkGrey`}>
      {/* Container for "Your One Stop" Heading and Description */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5 }}
        className='flex-col flex justify-center items-center sm:items-center sm:ml-12'
      >
      <div className={`${font.className} text-green-400  text-4xl sm:text-6xl mt-12 relative`}>
        Your One Stop{' '}
        <p className='text-yellow-300 sm:text-6xl text-4xl'>
          Artist's Web
        </p>
        {/* <div className="absolute  bottom-0 h-1 bg-customGreen-light shadow-customGreen-light shadow-xl"></div> */}
      </div>

        <div className='text-center sm:text-center text-white md:text-lg max-w-72 md:max-w-lg mt-4'>
          <p>
            Welcome to ViralClix, where we bring your creative visions to life with custom designed
            artworks including furry art, 2D OC art, anime art, and more.
          </p>
        </div>
      </motion.div>

      {/* Client and Projects Row */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5, delay: 0.1 }}
        className='flex-col flex sm:flex-row sm:space-x-12 sm:space-y-0 sm:mt-12 justify-center items-center mt-8 space-y-4'
      >
        <div className={`${font.className} text-yellow-300 text-4xl`}>
          200+ <p className={`${font2.className} text-white text-sm w-32 whitespace-nowrap`}>Clients Satisfied</p>
        </div>
        <div className={`${font.className} text-yellow-300 text-4xl`}>
          400+ <p className={`${font2.className} text-white text-sm w-32 whitespace-nowrap`}>Projects Completed</p>
        </div>
      </motion.div>

      {/* Responsive Container for Images, Line, and Heading/Text */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0 md:space-x-12 mt-24 mx-auto max-w-7xl'
      >
        {/* Images Section (Left) */}
        <div className='flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6'>
          <motion.img
            src='/2d-1.jpeg'
            className='w-auto h-72 md:h-80 lg:h-80 rounded-lg shadow-lg md:hover:h-96 duration-300 shadow-customGreen-light'
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          <motion.img
            src='/3d-5.png'
            className='w-auto bg-black h-72 md:h-80 lg:h-80 rounded-lg shadow-lg md:hover:h-96 duration-300 shadow-customGreen-light'
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
        </div>

        {/* Vertical Line (Center) */}
        <div className='hidden md:block h-full w-1 bg-white'></div>

        {/* Heading and Text (Right) */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='flex flex-col space-y-4 mt-4 text-white md:text-left text-center'
        >
          <h2 className={`${font.className} text-4xl sm:text-5xl lg:text-6xl text-yellow-300`}>
            Bringing Your Vision to Life
          </h2>
          <p className='text-lg md:text-xl max-w-xl'>
            At ViralClix, we provide comprehensive A to Z graphic design services, catering to all your creative needs. Our team specializes in everything from logo creation to 2D, 3D, and digital illustrations. We are dedicated to delivering high-quality, custom-designed artworks, ensuring each project reflects your vision. Whether it's branding, character design, or creative marketing assets, we’ve got you covered. Please note, we do not offer NSFW content, keeping our work professional and versatile for all audiences.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;
