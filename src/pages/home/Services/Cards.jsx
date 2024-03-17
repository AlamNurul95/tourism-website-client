import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({pack}) => {
    const {title,img,date,_id}=pack;
    console.log(img);
    console.log(title);

    return (
        <div className="card w-96 glass">
           <figure><img src={img} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>date:{date}</p>
    <div className="card-actions justify-end">
      <Link to={`/book/${_id}`}>
      <button className="btn btn-primary">Book Now</button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default Cards;