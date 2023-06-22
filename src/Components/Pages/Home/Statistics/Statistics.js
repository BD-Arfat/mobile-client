import React from 'react';

const Statistics = () => {
    return (
        <div className='mb-28'>
            <h1 className='font-bold text-5xl text-center mt-28'>Our Statistics</h1>
            <div className='bg-green-700 rounded-2xl mx-16 p-20 text-white mt-20'>
                <div className='flex justify-around text-center'>
                    <div className=' font-bold'>
                        <h1 className='text-5xl'>5000+</h1>
                        <p>Regular User</p>
                    </div>
                    <div className=' font-bold'>
                        <h1 className='text-5xl'>89K</h1>
                        <p>Followers on social media</p>
                    </div>
                    <div className=' font-bold'>
                        <h1 className='text-5xl'>400+</h1>
                        <p>Regular Seller</p>
                    </div>
                </div>
                <div className='flex justify-around text-center mt-10'>
                    <div className=' font-bold'>
                        <h1 className='text-5xl'>12+</h1>
                        <p>Media Partner</p>
                    </div>
                    <div className=' font-bold'>
                        <h1 className='text-5xl'>100K</h1>
                        <p>Mobile exchange</p>
                    </div>
                    <div className=' font-bold'>
                        <h1 className='text-5xl'>100+</h1>
                        <p>Agents</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;