import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const ChecoutForm = ({ data }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('')
    const [processing, setProcessing] = useState(false)

    const [clientSecret, setClientSecret] = useState("");
    const { price, email, name, _id } = data;


    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("  https://mobile-server-bd-arfat.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        };

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error.message)
        } else {
            setError('')
        }
        setSuccess('')
        setProcessing(false)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email,

                    },
                },
            },
        );
        if (confirmError) {
            setError(confirmError.message)
            return
        }
        if (paymentIntent.status === "succeeded") {


            const payment = {
                price,
                transactionId : paymentIntent.id,
                email,
                bookingId : _id
            }

            fetch("  https://mobile-server-bd-arfat.vercel.app/payments", {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment),
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        setSuccess('Congreats! your payment completed');
                        setTransactionId(paymentIntent.id);
                    }
                })

        }
        // console.log('paymentIntent', paymentIntent)

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className='btn btn-info btn-sm px-10 w-full mt-8' disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            <p className="text-red-600">{error}</p>
            {
                success && <div>
                    <p className='text-green-600'>{success}</p>
                    <p className=''>your transactionId : <span className='font-bold'>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default ChecoutForm;