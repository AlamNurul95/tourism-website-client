import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BookNow = () => {
    const pack=useLoaderData();
    const {title,img,date}=pack;

          return (
            <div>
            <h2>Book Service :{title}</h2>
      <form  className="card-body">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" name='name' placeholder="Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name='date' placeholder="Date" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"  name='email' placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" name='price' className="input input-bordered" required />
        </div>
       
        </div>
        <div className="form-control mt-6">
          <input className='btn btn-primary btn-block' type="submit" value="Order Confirm" />
        </div>
      </form>
    </div>
      

       
          );
        
        
        
     
    
};

export default BookNow;