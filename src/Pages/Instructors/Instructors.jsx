import { useEffect, useState } from "react";
import RowIns from "./RowIns";
import { useQuery } from "@tanstack/react-query";

const Instructors = () => {
    // const [instructors, setInstructor] = useState([])
    const { data: instructor = [] } = useQuery({
        queryKey:'instructor',
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/instructors')
            return res.json();
        }
    })
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
                        instructor.map((row, index) => <RowIns key={row._id} row={row} index={index}></RowIns> )
                    }
                </tbody>

            </table>
        </div>
    );
};

export default Instructors;