'use client'
import React, { useEffect, useState } from 'react'
import { assets, blog_data } from '@/Assets/assets';
import Image from 'next/image';
import Footer from '@/Components/Footer';
import Link from 'next/link';
const page = ({params}) => {

    const [data,setData]=useState(null);
    const fetchBlogData=()=>{
        for(let i=0;i<blog_data.length;i++){
            if(Number(params.id)==blog_data[i].id){
                setData(blog_data[i]);
                console.log(blog_data[i]);
                break;
            }
        }
    }

    useEffect(()=>{
        fetchBlogData();
    },[])
  return (data?<>
    <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between items-center'>
          <Link href='/'>
          <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto'/>
          </Link>
          <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>Get Started <Image src={assets.arrow} alt='' width={20}/></button>
        </div>
        <div className='text-center my-24'>
          <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
          <Image src={data.author_img} width={80} height={80} alt='' className='mx-auto mt-6 border border-white rounded-full'/>
          <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
        </div>
    </div>
    <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
        <Image src={data.image} width={1280} alt='' height={250} className='border-4 border-white mx-auto'/>
        <h1 className='my-8 text-[26px] font-semibold'>Introduction</h1>
        <p>{data.description}</p>
        <h3 className='my-5 text-[18px] font-semibold'>GOAL 1 </h3>
        <p className='my-3'>Yeah man, that was good. Let's do another one. Lorraine, have you ever, uh, been in a situation where you know you had to act a certain way but when you got there, you didn't know if you could go through with it? Wrecked? When did this happen and- Your not gonna be picking a fight, Dad, dad dad daddy-o. You're coming to a rescue, right? Okay, let's go over the plan again. 8:55, where are you gonna be. Nothing's coming to my mind.</p>

        <h3 className='my-5 text-[18px] font-semibold'>GOAL 2 </h3>
        <p className='my-3'>Get your meat hooks off of me. Oh, oh a rematch, why, were you cheating? I don't wanna see you in here again. Its good. Doc? Am I to understand you're still hanging around with Doctor Emmett Brown, McFly? Tardy slip for you, Miss Parker. And one for you McFly I believe that makes four in a row. Now let me give you a nickle's worth of advice, young man. This so called Doctor Brown is dangerous, he's a real nutcase. You hang around with him you're gonna end up in big trouble.</p>
    
        <h3 className='my-5 text-[18px] font-semibold'>GOAL 3 </h3>
        <p className='my-3'>I swiped it from the old lady's liquor cabinet. Biff. Well yeah, you know we have two of them. Well, uh, listen, uh, I really- Well, because George, nice girls get angry when guys take advantage of them.</p>

        <h3 className='my-5 text-[18px] font-semibold'>Conclusion </h3>
        <p className='my-3'>Marty, you interacted with anybody else today, besides me? Marty, you made it. Well looky what we have here. No no no, you're staying right here with me. Because, you might regret it later in life. Okay, okay you guys, oh ha ha ha very funny. Hey you guys are being real mature</p>

        <div className='my-24'>
          <p className='text-black font-semibold my-4 text-lg'>shareKaro.</p>
          <div className='flex gap-3 '>
            <Image src={assets.facebook_icon} alt=''className='rounded-full'width={30} height={10}/>
            <Image src={assets.twitter_icon} alt=''className='rounded-full' width={30} height={10}/>
            <Image src={assets.instagram_icon} alt=''className='rounded-full' width={30} height={10}/>
          </div>
        </div>
    </div>
    <Footer/>
    </>:<></>
  )
}

export default page