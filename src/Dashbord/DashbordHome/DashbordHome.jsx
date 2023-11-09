import React from 'react';

const DashbordHome = () => {
    return (
        <div className="relative flex flex-col md:justify-center items-center min-h-screen">
            <h1 className="text-xl font-bold pt-12">
                Welcome <span className=" uppercase"> Dear Hero.</span>!!!!!
            </h1>
            <p className="pt-4 ">Explore, Navigate, and Take Challenge.</p>

            <img
                src="speakup1.jpg"
                alt="Background for Learning"
                className="absolute object-cover w-full h-full opacity-40"
            />
        </div>

    );
};

export default DashbordHome;