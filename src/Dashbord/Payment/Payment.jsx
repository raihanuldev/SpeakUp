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
    const row = location.state?.row;

    // useEffect(() => {
    //     const storedRow = localStorage.getItem('row');
    //     if (storedRow) {
    //         setRow(JSON.parse(storedRow));
    //          localStorage.removeItem('row')
    //     }
    // }, [])
    // const price = row?.price;

    return (
        <div className='mockup-phone border-primary my-2'>
            <div className="camera"></div>
            <Helmet>
                <title>Pay Now || SpeakUp</title>
            </Helmet>
            <div className='display'>
                <div className='artboard artboard-demo phone-1'>
                    <h3 className="text-center text-3xl font-semibold">Please Procced to Chekout</h3>
                    <div className='p-12'>
                        <Elements stripe={stripePromis}>
                            <Checkout price={row}></Checkout>
                        </Elements>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Payment;