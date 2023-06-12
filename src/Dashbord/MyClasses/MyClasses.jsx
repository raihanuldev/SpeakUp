import { useContext, useEffect, useState } from "react";
import { AuthContex } from "../../Providers/AuthProvider";
import ClassesRow from "./ClassesRow";
import { Helmet } from "react-helmet-async";

const MyClasses = () => {
    <Helmet>
        <title>
            My Classes || SpeakUp
        </title>
    </Helmet>
    const { user } = useContext(AuthContex);
    const [MyClasses, setClasses] = useState([]);

    useEffect(() => {
        if (user.email) {
            fetch(`https://speakup-ivory.vercel.app/my-classes?email=${user.email}`)
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
                        MyClasses.map((row,index)=> <ClassesRow key={row._id} row={row} index={index}></ClassesRow>)
                       }
                    </tbody>
                    
                </table>
            </div>
        </div>
    );
};

export default MyClasses;