import React from 'react';

const BookingRow = ({booking}) => {
    const {customerName,email,service,date,price,img}=booking;
    return (
        <div>
        <tr>
       
        <td>
            <div className="avatar">
              <div className="rounded w-12 h-12">
                <img src={img}alt="Avatar Tailwind CSS Component" />
              </div>   
          </div>
        </td>
        <td>
          {customerName}
          
        </td>
        <td>{email}</td>
        <td>{service}</td>
        <td>{price}</td>
        <td>{date}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>

            
        </div>
    );
};

export default BookingRow;