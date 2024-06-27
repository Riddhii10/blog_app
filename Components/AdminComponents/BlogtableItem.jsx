import Image from 'next/image'
import React from 'react'
import {assets} from '@/Assets/assets';
const BlogtableItem = ({authorImg,title,author,date,deleteBlog,mongoId}) => {
    const BlogDate=new Date(date);
  return (
    <tr className='bg-white border-b'>
        <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
            <Image width={50} height={50} src={authorImg?authorImg:assets.profile_icon}/>
            <p>{author?author:"no-author-available"}</p>
        </th>
        <td className='px-6 py-4'>
            {title?title:"no-title-available"}
        </td>
        <td className='px-6 py-4'>
          {BlogDate.toDateString()}
        </td>
        <td onClick={()=>deleteBlog(mongoId)} className='px-6 py-4 cursor-pointer'>
            x
        </td>
    </tr>
  )
}

export default BlogtableItem