import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../../Providers/AuthProvider';
import CouresCart from '../../Components/CouresCart/CouresCart';
import Item from './item';

const EnrolledClass = () => {
    const [enrolled, setEnrolled] = useState(null || [])
    const { user } = useContext(AuthContex);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/enrolled-classes?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setEnrolled(data)
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }, [user]);

    return (
        <div>
            <h2 className='text-4xl text-center font-semibold my-4'>Continue Your Enrolled Classes</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Instructor Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enrolled.map((item,index) => <Item key={item._id} item={item} index={index}></Item> )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EnrolledClass;