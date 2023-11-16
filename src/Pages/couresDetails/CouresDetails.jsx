import React from 'react';
import { jsPDF } from "jspdf";
import { useLocation } from 'react-router-dom';

const CouresDetails = () => {
    // get data useing Location
    const location = useLocation();
    const couresInfo = location.state?.object;
    console.log(couresInfo);
    const { details, teacherId, price, name, instructorName, ratings, image, enrolled, availableSeats } = couresInfo || {};

    // pdf generator 
    const infoPdf = () => {
        const doc = new jsPDF('landscape', 'px', 'a4', 'false')
        doc.addFont('Helvertica', 'bold');
        doc.text(20, 60, `Course Name: ${name}`);
        doc.text(20, 80, `Instructor Name: ${instructorName}`);
        doc.text(20, 100, `Total Enrolled : ${enrolled}`);
        doc.text(20, 120, `Available Seats : ${availableSeats}`);
        doc.text(20, 140, `Coures Ratings  : ${ratings}`);
        // doc.link(20, 150), `Image: Link : ${image}`;
        doc.text(20, 160, ` Price: $${price}`);
        doc.text(20, 180, details);
        doc.save(` ${name}.pdf`)
    }
    return (
        <div className='mt-[80px]'>
            <p className='text-3xl font-serif text-center'>See Details About {name} Coures</p>

            <div className="h-full  space-y-6 rounded-xl border border-gray-200 bg-white">
                <img src={image} alt="" className='rounded r min-w-[100%] min-h-[20vh]' />
                <h5 className="text-xl px-[4%] font-bold text-black-600">Course Details</h5>
                <span className="block text-justify  px-[4%] pb-[4%] text-gray-500">{details}</span>
                <button onClick={infoPdf}  className="download bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                    <span>Download Details For This Coures</span>
                </button>

            </div>
        </div>
    );
};

export default CouresDetails;