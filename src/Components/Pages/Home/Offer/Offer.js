import React from 'react';

const Offer = () => {
    return (
        <div className='-mt-20'>
            <h1 className='font-bold text-3xl px-10 md:px-0 md:text-5xl text-center'>We have offers running here for a few days</h1>
            <div className="flex gap-5 mt-10 md:mt-16 justify-around bg-green-900 p-10 rounded-2xl mx-3 md:mx-28 text-white font-bold text-xl">
                <div>
                    <span className="countdown font-mono text-4xl">
                        <span style={{ "--value": 14 }}></span>
                    </span>
                    days
                </div>
                <div>
                    <span className="countdown font-mono text-4xl">
                        <span style={{ "--value": 10 }}></span>
                    </span>
                    hours
                </div>
                <div>
                    <span className="countdown font-mono text-4xl">
                        <span style={{ "--value": 24 }}></span>
                    </span>
                    min
                </div>
                <div>
                    <span className="countdown font-mono text-4xl">
                        <span style={{ "--value": 2 }}></span>
                    </span>
                    sec
                </div>
            </div>
        </div>
    );
};

export default Offer;