import { useEffect, useState } from 'react';
import { FaPeopleArrows, FaRegStar, FaStar } from 'react-icons/fa'
import { HiOutlineBookOpen } from 'react-icons/hi2'
import Rating from 'react-rating';

const Coures = () => {
    const [coures, setCoures] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/coures')
            .then(res => res.json())
            .then(data => setCoures(data))
    }, [])

    return (
        <div>
            <h2 className='text-center text-4xl font-semibold'>Our Tranding Course</h2>
            <div className='grid md:grid-cols-3 space-y-7'>
                {
                    coures.map(object => <>
                        <div key={object._id} className="card w-96 bg-base-100 shadow-xl" style={object.availableSeats < 0 ? { background: 'red' } : null} >
                            <figure><img src={object.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{object.name}</h2>
                                <p className='text-1xl font-semibold'>Price:{object.price}</p>
                                <p className='text-1xl'>Available Seats: {object.availableSeats}</p>
                                <p className='flex space-x-3 text-xl font-semibold'> <HiOutlineBookOpen></HiOutlineBookOpen> <span> Total Enrolled: {object.enrolled}</span> </p>
                                <Rating
                                    placeholderRating={object.ratings}
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar></FaStar>}
                                    readonly
                                />
                                <p className='text-1xl font-semibold'>Instructor Name: {object.instructorName}</p>
                                <div className="card-actions justify-end">
                                    <button disabled={object.availableSeats===0} className="btn btn-primary">Select</button>
                                </div>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default Coures;