import { useContext, useEffect, useState } from "react";
import { AuthContex } from "../../Providers/AuthProvider";
import ClassesRow from "./ClassesRow";

const MyClasses = () => {
    const { user } = useContext(AuthContex);
    const [MyClasses, setClasses] = useState([]);

    useEffect(() => {
        if (user.email) {
            fetch(`http://localhost:5000/my-classes?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setClasses(data)
                })
        }
    }, [user.email])


    return (
        <div>
            <h2 className="text-center font-semibold text-3xl">MY CLASSES</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Feedback</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        MyClasses.map((row,index)=> <ClassesRow key={row._id} object={row} index={index}></ClassesRow>)
                       }
                    </tbody>
                    
                </table>
            </div>
        </div>
    );
};

export default MyClasses;