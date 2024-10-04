import { font } from '@/app/components/font/titan'
import Footer from '@/app/components/Footer'
import Nav from '@/app/components/Nav'
import React from 'react'

const page = () => {
  return (
    <>
    <Nav/>
        <div className="min-h-[13rem] md:min-h-[21rem]" style={{
        backgroundImage: 'url("/stars.gif")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        
        <div className='flex justify-center items-center flex-col w-full'>
            <div className='text-white text-center mt-12'>
                <p className={`${font.className} text-7xl sm:text-9xl text-green-400`}>
                    2D<span className='text-white'>Art</span>
                </p>
                </div>
                <div className='text-center max-w-md mx-auto'>
                <p className='sm:text-2xl text-center text-white'>
                    Get personalized 2D character designs for your projects.
                </p>
                </div>
            </div>
        </div>
        <div className="min-h-screen two-d-gradient">
            <div className="flex flex-col md:flex-row md:mx-24 pt-12 justify-center items-center">
                <img src='/2d-1.jpeg' className='w-auto h-80 md:hover:h-96 duration-300 rounded-lg shadow-green-200 shadow-lg'/>
                <p className="text-white mt-12 text-center text-xl mx-12 max-w-2xl  p-4 rounded-md"><span className="text-3xl font-bold mb-6 text-yellow-300">What We Offer: </span><br/>At ViralClix, we specialize in creating vibrant and imaginative 2D artwork tailored to your unique vision. Our talented artists bring a diverse range of styles, from whimsical illustrations to detailed character designs, ensuring every piece resonates with your brand's identity. Whether you're looking for custom commissions, illustrations for projects, or engaging artwork for marketing, we’re here to help you bring your ideas to life. Let us transform your concepts into stunning visuals that capture attention and inspire creativity!</p>
            </div>
            <div className="flex flex-col md:flex-row md:mx-24 pb-12 pt-12 justify-center items-center">
                <p className="text-white mt-12 text-center text-xl mx-12 max-w-2xl p-4 rounded-md"><span className="text-3xl font-bold mb-6 text-yellow-300">How We Do Our Work: </span><br/>ViralClix is your go-to destination for captivating 2D artwork that elevates your creative projects. Our skilled artists craft stunning illustrations, character designs, and custom pieces that perfectly align with your vision. With a focus on quality and detail, we transform ideas into eye-catching visuals that make a lasting impact. Partner with us to bring your concepts to life and let your creativity shine!</p>
                <img src='/2d-art-4.png' className='w-auto h-80 md:hover:h-96 duration-300 rounded-lg shadow-green-200 shadow-lg' />
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default page