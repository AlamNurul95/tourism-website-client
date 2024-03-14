import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Blogs from '../Blogs/Blogs';
import Faq from '../Faq/Faq';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Blogs></Blogs>
            <Faq></Faq>
           
        </div>
    );
};

export default Home;