"use client";

import { font3 } from '@/app/components/font/poppin';
import { font2 } from '@/app/components/font/poppins';
import { font } from '@/app/components/font/titan';
import Footer from '@/app/components/Footer';
import Nav from '@/app/components/Nav';
import React from 'react';
import { motion } from 'framer-motion';

const page = () => {
  return (
    <>
      <Nav />
      <div className="min-h-[25rem] md:min-h-[25rem] bg-darkGrey">
        <div className='flex justify-center items-center flex-col w-full'>
          <div className='text-white text-center mt-36'>
            <motion.p
              className={`${font.className} text-7xl sm:text-9xl text-green-400`}
              initial={{ opacity: 0, y: -50 }} // Start off-screen above
              whileInView={{ opacity: 1, y: 0 }} // End position
              transition={{ duration: 1 }} // Duration of the animation
              viewport={{ once: false }} // Animation will repeat as you scroll
            >
              3D<span className='text-white'>Art</span>
            </motion.p>
          </div>
          <div className='text-center max-w-md mx-auto'>
            <motion.p className='sm:text-2xl text-center text-white' initial={{ opacity: 0, y: -50 }} // Start off-screen above
              whileInView={{ opacity: 1, y: 0 }} // End position
              transition={{ duration: 1 }} // Duration of the animation
              viewport={{ once: false }}>
              Get personalized 3D character designs for your projects.
            </motion.p>
          </div>
        </div>
      </div>
      <div className="min-h-screen two-d-gradient">
        <motion.div
          className="flex flex-col md:flex-row md:mx-24 pt-12 justify-center items-center"
          initial={{ opacity: 0, y: 50 }} // Start off-screen
          whileInView={{ opacity: 1, y: 0 }} // End position
          transition={{ duration: 1 }} // Duration of the animation
          viewport={{ once: false }} // Animation will repeat as you scroll
        >
          <img src='/3d-1.jpeg' className='w-auto h-80 md:hover:h-96 duration-300 rounded-lg shadow-green-200 shadow-lg' />
          <p className={`${font2.className} text-white mt-12 text-center text-xl mx-12 max-w-2xl p-4 rounded-md`}>
            <span className={`${font2.className} text-3xl font-bold mb-6 text-yellow-300`}>What We Offer: </span><br />
            At ViralClix, we specialize in creating vibrant and imaginative 3D artwork tailored to your unique vision. Our talented artists bring a diverse range of styles, from whimsical illustrations to detailed character designs, ensuring every piece resonates with your brand's identity. Whether you're looking for custom commissions, illustrations for projects, or engaging artwork for marketing, we’re here to help you bring your ideas to life. Let us transform your concepts into stunning visuals that capture attention and inspire creativity!
          </p>
        </motion.div>
        
        <motion.div
          className="flex flex-col md:flex-row md:mx-24 pb-12 pt-12 justify-center items-center"
          initial={{ opacity: 0, y: 50 }} // Start off-screen
          whileInView={{ opacity: 1, y: 0 }} // End position
          transition={{ duration: 1 }} // Duration of the animation
          viewport={{ once: false }} // Animation will repeat as you scroll
        >
          <p className={`${font2.className} text-white mt-12 text-center text-xl mx-12 max-w-2xl p-4 rounded-md`}>
            <span className={`${font2.className} text-3xl font-bold mb-6 text-yellow-300`}>How We Do Our Work: </span><br />
            ViralClix is your go-to destination for captivating 2D artwork that elevates your creative projects. Our skilled artists craft stunning illustrations, character designs, and custom pieces that perfectly align with your vision. With a focus on quality and detail, we transform ideas into eye-catching visuals that make a lasting impact. Partner with us to bring your concepts to life and let your creativity shine!
          </p>
          <img src='/3d-5.png' className='w-auto h-80 bg-black md:hover:h-96 duration-300 rounded-lg shadow-green-200 shadow-lg' />
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default page;
