import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://nutritionguide.pcrm.org/nutritionguide/repview?type=598-829&name=23_1238024_Standard)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">We help you learn what you love</h1>
                    <p className="mb-5">It’s the last day to save Expand your horizons with learning that’s worldwide. Log in now to shop the sale. A broad selection of courses Choose from 204,000 online video courses with new additions published every month

                    </p>
                    <div className=' space-x-3 center'>
                        <Link to='/login'><button className="btn btn-outline btn-error">Join With Us</button></Link>
                        <Link to='/classes'><button className="btn btn-outline btn-error">Browse Courses</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;