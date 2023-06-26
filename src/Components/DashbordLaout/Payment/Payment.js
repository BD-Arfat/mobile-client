import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChecoutForm from './ChecoutForm/ChecoutForm';

const stripePromise = loadStripe('pk_test_51NMw5yGE3FOL5Y8NMy3452IIDRWxlrE9Z8exdICJxy0Tpra0RxEpaNssk7WXJRuovRtNkyb2WjrSg6X8ymMDNpw700BsNDCrx3');
const Payment = () => {

    const data = useLoaderData();

    return (
        <div>
            <h1 className="text-3xl font-bold mt-3 ms-5">This Is Payment Page</h1>
            <h2 className='mt-6 ms-5 text-xl'>Payment For : <span className='font-bold'>{data.product}</span></h2>
            <p className="text-lg mt-3 ms-5 ">Please pay : <span className='font-bold'>{data.price}$</span></p>
            <div>
                <div className='w-96 shadow-2xl mx-auto mt-10 md:mt-14 border-2 border-info px-12 rounded-2xl py-20'>
                <Elements stripe={stripePromise}>
                    <ChecoutForm  data={data}/>
                </Elements>
            </div>
            </div>
        </div>
    );
};

export default Payment;