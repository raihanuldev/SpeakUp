import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  console.log(course);
  const {
    _id,
    name,
    price,
    details,
    image,
    instructorName,
    enrolled,
    availableSeats,
  } = course;
  const trimedDetails = details.substring(0,50);
  return (
    <div
        key={_id}
        className="w-full md:h-[450px] xl:h-[400px] rounded overflow-hidden shadow-md bg-gray-100 hover:scale-95 duration-300 flex flex-col"
      >
        {/* CARD IMAGE */}
        <div>
          <img src={image} alt={name} className="w-full h-36 object-cover" />
        </div>

        {/* CARD INFO/BODY */}
        <div className="flex flex-col justify-between p-4 text-sm h-full">
          <div className="mt-4">
            <div className="font-bold text-base mb-2">{name}</div>
            <p className="text-gray-500 text-sm">{trimedDetails}</p>
          </div>

          <div className="flex flex-col justify-start gap-4 mt-5">
            <div className="">
              <p className="text-start text-gray-600 text-sm">
                <span className="font-semibold">Total enrolled:</span> {enrolled}
              </p>
              <p className="text-start text-gray-600 text-sm">
                <span className="font-semibold">Instructor:</span> {instructorName}
              </p>
            </div>

            <div className="mt-auto w-full space-y-2">
              <button className="w-full bg-gray-800 text-white font-semibold py-1 md:py2 px-4 rounded-sm duration-300">
                <Link
                  to={`/courses/:${_id}`}
                  state={course}
                  course={course}
                  className="block"
                >
                  Add to Cart
                </Link>
              </button>
              <button className="w-full bg-gray-800 text-white font-semibold py-1 md:py2 px-4 rounded-sm duration-300">
                <Link
                  to={`/courses/:${_id}`}
                  state={course}
                  course={course}
                  className="block"
                >
                  View Details
                </Link>
              </button>
              
            </div>
          </div>
        </div>
      </div>
  );
};

export default CourseCard;
