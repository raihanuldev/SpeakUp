import React from 'react';
import { Link } from 'react-router-dom';

const Nabvar = () => {
    const items = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/instructors'>Instructors</Link></li>
        <li><Link to='/classes'>Classes</Link></li>
        <li><Link to='/classes'>Dashboard</Link></li>
        <li><Link to='/login'>Login</Link></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 text-2xl shadow bg-base-100 rounded-box w-52">
                        {items}
                    </ul>
                </div>
                <a className=" normal-case text-3xl font-semibold">Language <span className='text-yellow-400'>School</span> </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-2xl px-1">
                   {items}
                </ul>
            </div>
            
        </div>
    );
};

export default Nabvar;