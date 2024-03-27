import { data } from 'autoprefixer';
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

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
    return (
        <div>
            <h2>sddd</h2>
            
        </div>
    );
};

export default MyBooking;