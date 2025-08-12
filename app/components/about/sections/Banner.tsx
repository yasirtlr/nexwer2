import Image from 'next/image'
import React from 'react'
 import { assets } from '@/public/assets/assets'

const Banner = () => {
  return (
    <section className='pb-[70px] pt-[180px] lg:pb-[100px] lg:pt-[250px] bg-[#f2f2f2] relative overflow-hidden' >
        <figure className='absolute top-0 bottom-0 z-0 w-full h-full'>
            <Image className='absolute w-full h-full object-cover object-center' src={assets.abtbnr} width={1500} height={800} alt=''/>
        </figure>
        <div className="absolute w-full h-full bg-black z-[2] top-0 opacity-50"></div>
        <div className="container z-10 relative">
            <h1 className='text-[40px] md:text-[60px] xl:text-[80px] text-white'>About Us</h1>
            <p className='text-[20px] lg:text-[25px] font-light  text-white'>Built for Today. Ready for Tomorrow.</p>
        </div>

    </section>
  )
}

export default Banner