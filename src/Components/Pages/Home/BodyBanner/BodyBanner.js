import React from 'react';
import image from '../../../../image/all iPhone.jpeg'

const BodyBanner = () => {
    return (
        <div className=' my-40'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} className="md:w-1/2" />
                    <div className='md:w-1/2 mt-6'>
                        <h1 className="text-xl md:text-5xl font-bold">Sell and Buy your mobile phone Easily</h1>
                        <p className="py-6">You can't just buy and sell products from now on. You can also sell products here if you want. We have also given you that freedom.</p>
                        <button className="btn btn-neutral px-14 w-full lg:w-60">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BodyBanner;