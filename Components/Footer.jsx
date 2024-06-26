import React from 'react'
import Image from 'next/image'
import { assets } from '@/Assets/assets'
const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
        <Image src={assets.logo_light} alt='' width={120} className='rounded-sm'/>
        <p className='text-base text-white'>All rights reserved. Copyright @travelKaro</p>
        <div className='flex gap-2' >
            <Image src={assets.facebook_icon} width={50} className='rounded-lg'/>
            <Image src={assets.twitter_icon} width={50} className='rounded-lg' />
            <Image src={assets.instagram_icon} width={50} className='rounded-lg'/>
        </div>
    </div>
  )
}

export default Footer