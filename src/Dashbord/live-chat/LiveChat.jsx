import React, { useContext } from 'react';
import { AuthContex } from '../../Providers/AuthProvider';

const LiveChat = () => {
    // received user from AuthContex 
    const {user} = useContext(AuthContex) 
    return (
        <div className=''>
            {/* Header */}
            <div className="flex flex-row items-center justify-between pe-2 bg-zinc-900 py-4 rounded-sm">
                <p className="text-sm text-white md:text-white font-semibold border-l-4 border-primary ml-2 inline-block px-2 md:px-5">
                    Live Chat With Ai Assistant 
                </p>
            </div>
            {/* main section */}
            <section>
                <h1 className='text-center text-2xl my-3 font-bold'>Hey {user.displayName ||"User"}, How can I help you?</h1>
                <div className='border p-5 border-primary-focus m-5 mt-3 h-80'>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum perferendis eveniet recusandae.</p>
                </div>
                <div className=''>
                    {/* <p className='text-center text-2xl font-semibold'>Ask Me </p> */}
                    <input className='border p-5 border-primary mx-5 mt-[40px] w-[70%]' type="text" placeholder='Drop Your Query' />
                    <button className='btn btn-primary justify-end'>Send</button>
                </div>
            </section>
        </div>
    );
};

export default LiveChat;