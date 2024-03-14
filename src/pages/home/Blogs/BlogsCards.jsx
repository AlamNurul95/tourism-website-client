import React from 'react';

const BlogsCards = ({blog}) => {
    const {title,img,description}=blog;
    const buttonStyle = {
        color: 'orange',
      };
    return (
        <div className="card card-side bg-base-100 shadow-xl ">
  <figure><img src={img}alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Read More...</button>
    </div> */}
    <a style={buttonStyle} href="www.google.com">Read More...</a>
  </div>
</div>
    );
};

export default BlogsCards;