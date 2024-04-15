import { FaUsers, FaUser } from "react-icons/fa";

const Instructor = ({ instructor }) => {
  console.log(instructor.instructorImage[0]);
  return (
    <div className="card w-96 bg-base-200 shadow-xl flex flex-col items-center p-5 transform transition-all duration-1000 hover:scale-105 my-3">
      <div className="avatar flex items-center justify-center ">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={instructor.instructorImage[0].image} />
        </div>
      </div>
      <div className="card-body text-center">
        <h2 className="card-title">{instructor.instructorName[0].instructor}</h2>
        <h2>Speak-Up Mentor</h2>
      </div>
    </div>
  );
};

export default Instructor;
