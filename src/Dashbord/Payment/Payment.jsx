import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import Checkout from './Checkout';
import { loadStripe } from '@stripe/stripe-js';

const stripePromis = loadStripe(import.meta.env.VITE_PK)
const Payment = () => {
    return (
        <div>
            <h3 className="text-center text-3xl font-semibold">Please Procced to Chekout</h3>

            <div className='mx-12 px-12'>
                <Elements stripe={stripePromis}>
                    <Checkout></Checkout>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;