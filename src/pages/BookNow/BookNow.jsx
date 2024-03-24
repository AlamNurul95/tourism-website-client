import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const BookNow = () => {
    const pack=useLoaderData();
    const {title}=pack;
    const{user}=useContext(AuthContext);

    const handleBookService=event=>{
      event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const date=form.date.value;
        const email=form.email.value;
        const price=form.price.value;
        const order={
          customerName:name,
          date,
          email,
          price,

      }
      console.log(order);
      

    }

          return (
            <div>
            <h2>Book Service :{title}</h2>
      <form onSubmit={handleBookService} className="card-body">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' defaultValue={user?.displayName}  placeholder="Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name='date' defaultValue={user?.displayName} placeholder="Date" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"  name='email' defaultValue={user?.email} placeholder="Email" className="input input-bordered" required />
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