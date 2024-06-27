'use client'
import React, { useEffect, useState } from 'react'
import { assets, blog_data } from '@/Assets/assets';
import Image from 'next/image';
import Footer from '@/Components/Footer';
import Link from 'next/link';
import axios from 'axios';
const page = ({params}) => {

    const [data,setData]=useState(null);
    const fetchBlogData=async()=>{
        // for(let i=0;i<blog_data.length;i++){
        //     if(Number(params.id)==blog_data[i].id){
        //         setData(blog_data[i]);
        //         console.log(blog_data[i]);
        //         break;
        //     }
        // }
        const response=await axios.get('/api/blog',{
          params:{
            id:params.id
          }
        })
        setData(response.data);
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
          <Image src={data.authorImg} width={80} height={80} alt='' className='mx-auto mt-6 border border-white rounded-full'/>
          <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
        </div>
    </div>
    <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
        <Image src={data.image} width={1280} alt='' height={250} className='border-4 border-white mx-auto'/>
        {/* <h1 className='my-8 text-[26px] font-semibold'>Introduction</h1> */}
        {/* <p>{data.description}</p> */}
        <div className='blog-content' dangerouslySetInnerHTML={{__html:data.description}}>
          
        </div>
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