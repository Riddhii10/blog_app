import React, { useEffect, useState } from 'react'
import {blog_data} from "@/Assets/assets"
import BlogItem from './BlogItem'
import axios from 'axios';
const BlogList = () => {
    const [menu,setMenu]=useState("All");
    const [blogs,setBlogs]=useState([]);
    const fetchBlogs = async () => {
        try {
          const response = await axios.get('/api/blog');
          console.log('API Response:', response.data.blogs); // Log the API response
          const blogsWithFullImagePath = response.data.blogs.map(blog => ({
            ...blog,
            image: `${blog.image}`.replace(/[{}]/g, ''), // Ensure the image path is correctly formatted
          }));
          setBlogs(blogsWithFullImagePath);
        } catch (error) {
          console.error('Error fetching blogs:', error);
        }
      };
    
    useEffect(()=>{
        fetchBlogs();
    },[])
  return (
    <div>
        <div className ='flex justify-center gap-6 my-10'>
            <button onClick={()=>setMenu('All')} className={menu==="All"?'bg-black text-white py-1 px-4 rounded-sm':""}>All</button>
            <button onClick={()=>setMenu('Technology')} className={menu==="Technology"?'bg-black text-white py-1 px-4 rounded-sm':""}>Technology</button>
            <button onClick={()=>setMenu('Startup')} className={menu==="Startup"?'bg-black text-white py-1 px-4 rounded-sm':""}>StartUp</button>
            <button onClick={()=>setMenu('Lifestyle')} className={menu==="Lifestyle"?'bg-black text-white py-1 px-4 rounded-sm':""}>Lifestyle</button>
        </div>
        <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
            {blogs
            .filter((item)=>
            {return menu==='All'||item.category===menu})
            .map((item,index)=>{
                return <BlogItem key={index} id={item._id} image={item.image} title={item.title} description={item.description} category={item.category}/>
            })}
        </div>
    </div>
  )
}

export default BlogList