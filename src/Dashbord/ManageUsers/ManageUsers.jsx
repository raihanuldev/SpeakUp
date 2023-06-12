import { useEffect } from "react";
import { useState } from "react";
import Users from "./Users";

const ManageUsers = () => {
    const [allusers, setAllusers] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/all-users')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllusers(data)
            })
    }, [])

    return (
        <div>
            <h2 className="text-3xl text-center font-semibold">Manage All Users</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Current Role</th>
                            <th>Make Admin</th>
                            <th>Make Instrcutor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allusers.map((user,index)=> <Users key={user._id} index={index} user={user}></Users>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;