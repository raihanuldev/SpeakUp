import React from 'react';

const ClassesRow = ({index,row}) => {
    const message = row?.feedback?.message || '';
    console.log(row);
    
    return (
        <tr>
            <th>
                {index+1}
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={row?.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{row.name}</div>
                        <div className="text-sm opacity-50">Coures Id: {row._id}</div>
                    </div>
                </div>
            </td>
            <td>
                $ {row.price}
            </td>
            <td>
                <p className='text-red-600 font-semibold'>{row?.status}</p>
            </td>
            <td>{message}</td>
            <th>
                <button className="btn btn-outline btn-sm">Update</button>
            </th>
        </tr>

    );
};

export default ClassesRow;