import React from 'react';
import Timer from './Timer';

const Offer = () => {
    return (
        <div>
            <h1 className='text-center font-bold md:text-5xl text-2xl'>Now our offer is running</h1>
            <p className='text-center mt-4'>
            We have come up with offers for some days.  Only thinking of you. <br /> Order your product now
            </p>
            <div >
                <Timer />
            </div>
        </div>
    );
};

export default Offer;