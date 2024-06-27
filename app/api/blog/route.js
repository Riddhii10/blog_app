const {NextResponse}=require("next/server")
import {ConnectDB} from '@/lib/config/db';
import { writeFile } from 'fs/promises';
import { describe } from 'node:test';
import BlogModel from '../../../lib/models/BlogModel';
// const BlogModel = require('../../../lib/models/BlogModel'); 
const LoadDB=async()=>{
    await ConnectDB();
}

LoadDB();
// api emdpoint to get all blogs 
export async function GET(request){
    //console.log("Blog GET request chal raha hai . ")
    const blogs = await BlogModel.find({});
    // return NextResponse.json({msg:"API Working"});
    return NextResponse.json({blogs});
}

//API endpoint for uploading blogs 
export async function POST(request){
    const formData=await request.formData();
    const timestamp=Date.now();

    const image=formData.get('image');
    const imageByteData=await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`
    await writeFile(path,buffer);
    const imgUrl=`/${timestamp}_${image.name}}`

    const blogData={
        title:`${formData.get('title')}`,
        description:`${formData.get('description')}`,
        category:`${formData.get('category')}`,
        author:`${formData.get('author')}`,
        image:`${imgUrl}`,
        authorImg:`${formData.get('authorImg')}`
    }
    //console.log(imgUrl);

    await BlogModel.create(blogData);
    console.log("Blog Saved");
    
    // return NextResponse.json({imgUrl})
    return NextResponse.json({success:true,msg:"Blog Added."})
}

