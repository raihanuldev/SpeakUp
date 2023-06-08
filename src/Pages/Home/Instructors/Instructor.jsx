import {FaUsers,FaUser} from 'react-icons/fa';

const Instructor = ({instructor}) => {
    console.log(instructor.instructorName[0].instructor);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={instructor.instructorImage[0].image} alt="Instructor Image" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl">{instructor.instructorName[0].instructor}</h2>
                <p className="text-1xl font-semibold flex"> <FaUser></FaUser> Instructor Id: {instructor._id}</p>
                <p className="text-2xl font-semibold flex"><FaUsers></FaUsers>Total Student: {instructor.totalEnrollments}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Instructor;