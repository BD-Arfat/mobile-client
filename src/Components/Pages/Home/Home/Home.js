import React from 'react';
import Banners from '../banners/Banners';
import BodyBanner from '../BodyBanner/BodyBanner';
import Offer from '../Offer/Offer';
import Products from '../Products/Products';
import Statistics from '../Statistics/Statistics';

const Home = () => {
    return (
        <div>
        // banners section
            <Banners/>
        // BodyBanner section
            <BodyBanner/>
        // Offer section
            <Offer/>
        // Products section
            <Products/>
        // Statistics section
            <Statistics/>
        </div>
    );
};

export default Home;
