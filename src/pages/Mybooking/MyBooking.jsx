import { data } from 'autoprefixer';
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import BookingRow from './BookingRow';

const MyBooking = () => {
    const {user}=useContext(AuthContext);
    const [bookings,setBookings]=useState([]);
    const url=`http://localhost:5000/booking?email=${user?.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setBookings(data))
        console.log(data);
    },[])

    const handleDelete=id=>{
      const proceed=confirm('Are you sure you want to Delete?');
      if(proceed){
        fetch(`http://localhost:5000/booking/${id}`,{
          method:'DELETE'

        })
        
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          if(data.deletedCount>0){
            alert('deleted successfully');
            const remaining=bookings.filter(booking=>booking._id!==id);
            setBookings(remaining);
          }
        })
       
      }

    }
    return (
        <div>
            <h1>{bookings.length}</h1>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Price</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
        {bookings.map(booking=><BookingRow
        key={booking._id} booking={booking} handleDelete={handleDelete}></BookingRow>)}
     
    </tbody>
  </table>
</div>
</div>
            
       
    );
};

export default MyBooking;