import React from 'react';

const Cards = ({pack}) => {
    const {title,img,date}=pack;
    console.log(img);
    console.log(title);

    return (
        <div className="card w-96 glass">
           <figure><img src={img} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>date:{date}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Learn More!</button>
    </div>
  </div>
</div>
    );
};

export default Cards;