import React from 'react';

const ClassesRow = ({index,object}) => {
    return (
        <tr>
            <th>
                {index+1}
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={object?.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{object.name}</div>
                        <div className="text-sm opacity-50">Coures Id: {object._id}</div>
                    </div>
                </div>
            </td>
            <td>
                $ {object.price}
            </td>
            <td>
                <p className='text-red-600 font-semibold'>{object?.status}</p>
            </td>
            <td>{object?.feedback}</td>
            <th>
                <button className="btn btn-outline btn-sm">Update</button>
            </th>
        </tr>

    );
};

export default ClassesRow;