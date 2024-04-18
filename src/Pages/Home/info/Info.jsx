import React from 'react';

const Info = () => {
    return (
        <div className='bg-base-200 grid grid-cols-1 md:grid-cols-4 p-16 m-4 space-x-3 rounded-lg my-5 '>
            <div className='bg-base-300 rounded-lg p-10 text-center'>
                <p className='text-4xl font-bold'>20+</p>
                <p className='font-semibold'>Expert Mentors</p>
            </div>
            <div className='bg-base-300 rounded-lg p-10 text-center'>
                <p className='text-4xl font-bold'>100+</p>
                <p className='font-semibold'>Published Coures</p>
            </div>
            <div className='bg-base-300 rounded-lg p-10 text-center'>
                <p className='text-4xl font-bold'>5800+</p>
                <p className='font-semibold'>Enrolled Students</p>
            </div>
            <div className='bg-base-300 rounded-lg p-10 text-center'>
                <p className='text-4xl font-bold'>10+</p>
                <p className='font-semibold'>Years Experiances</p>
            </div>
        </div>
    );
};

export default Info;