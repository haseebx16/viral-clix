import { font } from '@/app/components/font/titan'
import Nav from '@/app/components/Nav'
import React from 'react'

const page = () => {
  return (
    <>
    <Nav/>
        <div className="min-h-[21rem]" style={{
        backgroundImage: 'url("/stars.gif")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        
        <div className='flex justify-center items-center flex-col w-full'>
            <div className='text-white text-center mt-12'>
                <p className={`${font.className} text-7xl sm:text-9xl text-green-400`}>
                    Overlays
                </p>
                </div>
                <div className='text-center max-w-md mx-auto'>
                <p className='sm:text-2xl text-center text-white'>
                    Get personalized overlays for your projects.
                </p>
                </div>
            </div>
        </div>
       
    </>
  )
}

export default page