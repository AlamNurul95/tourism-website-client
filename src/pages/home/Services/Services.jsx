import React from 'react';
import Cards from './Cards';

const Services = () => {
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
                <Cards></Cards>
            }
            </div>
            </div>
            
            
    
            
        
    );
};

export default Services;