import React from "react";
import { jsPDF } from "jspdf";
import { useLocation } from "react-router-dom";

const CouresDetails = () => {
  // get data useing Location
  const location = useLocation();
  const couresInfo = location.state;
  console.log(couresInfo);

  // pdf generator
  const infoPdf = () => {
    const doc = new jsPDF("landscape", "px", "a4", "false");
    doc.addFont("Helvertica", "bold");
    doc.text(20, 60, `Course Name: ${name}`);
    doc.text(20, 80, `Instructor Name: ${instructorName}`);
    doc.text(20, 100, `Total Enrolled : ${enrolled}`);
    doc.text(20, 120, `Available Seats : ${availableSeats}`);
    doc.text(20, 140, `Coures Ratings  : ${ratings}`);
    // doc.link(20, 150), `Image: Link : ${image}`;
    doc.text(20, 160, ` Price: $${price}`);
    doc.text(20, 180, details);
    doc.save(` ${name}.pdf`);
  };
  return (
    <div className="mt-[6rem] grid md:grid-cols-2 ">
      <div className="">
        <img className="border border-gray-200 md:w-[100%] p-9 h-screen rounded-lg" src={couresInfo.image} alt="" />
      </div>
      <div className="ml-8">
        <p className="text-4xl font-semibold">{couresInfo.name}</p>
        <p>by <span className="font-semibold underline">{couresInfo.instructorName}</span></p>
        <div className="">
            <p className="text-xl my-3">{couresInfo.details}</p>
            <p> <span className="text-warning font-semibold">Price</span>: <span className="font-bold"> {couresInfo.price} USD</span></p>
            <p> <span className="text-warning font-semibold">Discount Price</span>: <span className="font-bold"> {couresInfo.price-19.8} USD</span></p>
            <p> <span className="text-warning font-semibold">Available Seats</span>: <span className="font-bold"> {couresInfo.availableSeats}</span></p>
            <p> <span className="text-warning font-semibold">Enrolled</span>: <span className="font-bold"> {couresInfo.enrolled}</span></p>
            <p> <span className="text-warning font-semibold">Rating</span>: <span className="font-bold"> {couresInfo.ratings}</span></p>
            <div>
                <button className="btn btn-outline bg-slate-500 mr-5">Add to Cart</button>
                <button className="btn btn-outline bg-slate-500">Download PDF</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CouresDetails;
