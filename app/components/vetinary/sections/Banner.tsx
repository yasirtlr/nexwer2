import Image from 'next/image'
import React from 'react'
 import { assets } from '@/public/assets/assets'

const Banner = () => {
  return (
    <section className='pb-[100px] pt-[250px] bg-[#f2f2f2] relative overflow-hidden' >
        <figure className='absolute top-0 bottom-0 z-0 w-full h-full'>
            <Image className='absolute w-full h-full object-cover object-center' src={assets.abtbnr} width={1500} height={800} alt=''/>
        </figure>
        <div className="absolute w-full h-full bg-black z-[2] top-0 opacity-50"></div>
        <div className="container z-10 relative">
            <h1 className='text-[80px] text-white'>Veterinary Software Solutions </h1>
            <p className='text-[25px] font-light  text-white'>Modern, client-centric digital solutions for veterinary clinics. PIMS integration, online booking, e-commerce, and more — built by Nexwerx to streamline your practice.</p>
        </div>

    </section>
  )
}

export default Banner