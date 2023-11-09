import { Elements } from '@stripe/react-stripe-js';
import Checkout from './Checkout';
import { loadStripe } from '@stripe/stripe-js';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const stripePromis = loadStripe(import.meta.env.VITE_PK)
const Payment = () => {

    const location = useLocation();
    console.log(location.state?.row);
    const row =location.state?.row;

    // useEffect(() => {
    //     const storedRow = localStorage.getItem('row');
    //     if (storedRow) {
    //         setRow(JSON.parse(storedRow));
    //          localStorage.removeItem('row')
    //     }
    // }, [])
    // const price = row?.price;

    return (
        <div>
            <Helmet>
                <title>Pay Now || SpeakUp</title>
            </Helmet>
            <h3 className="text-center text-3xl font-semibold">Please Procced to Chekout</h3>

            <div className='mx-12 px-12'>
                <Elements stripe={stripePromis}>
                    <Checkout price={row}></Checkout>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;