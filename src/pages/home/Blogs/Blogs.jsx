import React, { useEffect, useState } from 'react';
import BlogsCards from './BlogsCards';

const Blogs = () => {
    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/blogs')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        
       <>
        <div className="flex items-center">
        <div className="border-t border-black flex-grow mr-4"></div>
        <div className="text-center"><h2>Latest Blogs !</h2></div>
        <div className="border-t border-black flex-grow ml-4"></div>
                  </div>

         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6'>
             {
                blogs.map(blog=><BlogsCards key={blog._id} blog={blog} ></BlogsCards>)
             }
         </div>
       </>
    );
};

export default Blogs;