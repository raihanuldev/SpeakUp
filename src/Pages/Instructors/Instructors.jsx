import { useEffect, useState } from "react";
import RowIns from "./RowIns";

const Instructors = () => {
    const [instructors, setInstructor] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => setInstructor(data))
    }, [])
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        instructors.map((row, index) => <RowIns key={row._id} row={row} index={index}></RowIns> )
                    }
                </tbody>

            </table>
        </div>
    );
};

export default Instructors;