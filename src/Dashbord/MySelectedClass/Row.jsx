import React from 'react';
import { Link } from 'react-router-dom';

const Row = ({ row, index }) => {
    
    return (
        <tr>
            <th>
                {index + 1}
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={row.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{row.name}</div>
                        <div className="text-sm opacity-50">Coures Id: {row.cartId}</div>
                    </div>
                </div>
            </td>
            <td>
                <p className='text-xl'>${row.price}</p>
            </td>
            <td>
                <button className='btn btn-ghost '>Remove</button>
            </td>
            <th>
                <Link to='/dashbord/payment'><button className="btn btn-ghost">Pay Now</button></Link>
            </th>
        </tr>
    );
};

export default Row;