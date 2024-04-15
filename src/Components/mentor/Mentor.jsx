
const Mentor = ({mentor}) => {
    console.log(mentor)
  return (
    <div className="card w-96 bg-base-200 shadow-xl flex flex-col items-center p-5 transform transition-all duration-1000 hover:scale-105 my-3">
      <div className="avatar flex items-center justify-center ">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={mentor?.instructorImage} />
        </div>
      </div>
      <div className="card-body text-center">
        <h2 className="card-title">{mentor?.instructorName}</h2>
        <h2>Speak-Up Mentor</h2>
      </div>
    </div>
  );
};

export default Mentor;
