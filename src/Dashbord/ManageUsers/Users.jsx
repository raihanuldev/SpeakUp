import { HiOutlineUser, HiOutlineUserCircle } from "react-icons/hi";


const Users = ({user,index}) => {

    const handleMakeAdmin = ()=>{
        const id = user._id;
        fetch(`http://localhost:5000/make-admin/${id}`,{
            method: 'PUT',
            
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }

    return (
        <tr className="bg-base-200">
            <th>{index +1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td> 
                <button onClick={handleMakeAdmin} disabled={user.role==='admin'} className="btn btn-outline btn-sm"> <HiOutlineUser></HiOutlineUser> </button>
            </td>
            <td>
                <button disabled={user.role ==='instructor'} className="btn btn-outline btn-sm"> <HiOutlineUserCircle></HiOutlineUserCircle> </button>
            </td>
        </tr>
    );
};

export default Users;