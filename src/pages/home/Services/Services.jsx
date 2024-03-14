import React, { useEffect, useState } from 'react';
import Cards from './Cards';

const Services = () => {
    const [packages,setPackages]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/packages')
        .then(res=>res.json())
        .then(data=>setPackages(data))
    },[])
    return (
       
           
            
            <div>
            <div>
                <div className="flex items-center">
      <div className="border-t border-black flex-grow mr-4"></div>
      <div className="text-center"><h2>Our Best Packages</h2></div>
      <div className="border-t border-black flex-grow ml-4"></div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6'>
            {
                packages.map(pack=><Cards key={pack._id} pack={pack} ></Cards>)
            }
            </div>
            </div>
            
            
    
            
        
    );
};

export default Services;