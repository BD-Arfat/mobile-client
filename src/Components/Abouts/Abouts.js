import React from 'react';

const Abouts = () => {
    return (
        <div>
            <h1 className='text-center font-bold mt-7 text-3xl md:mt-11 md:text4xl'>All rules of this website are written here</h1>
            <div>
                <h1 className='md:w-11/12 mx-auto mt-14 text-xl'>1) This is what this website is made of : <span className='font-bold'>react js, talwind css, dasiy ui, firebase, mongoDB, JWT</span></h1>
                <h1 className='md:w-11/12 mx-auto mt-4 text-xl'>2) What can a user do on this website? : <span className='font-bold'>A user can buy products from our website. We have arranged payment on our website for purchasing products</span></h1>
                <h1 className='md:w-11/12 mx-auto mt-4 text-xl'>3) Who controls this website? : <span className='font-bold'>This website has admin and management. Admin can make all users admin and delete all users.</span></h1>
            </div>
        </div>
    );
};

export default Abouts;