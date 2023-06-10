import React from 'react';
import { useContext } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { HiOutlineBookOpen } from 'react-icons/hi2';
import Rating from 'react-rating';
import { AuthContex } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const CouresCart = ({ object }) => {
    const { user } = useContext(AuthContex);
    // console.log(object);
    const handleCart = (cartItem) => {
        if (user && user.email) {
            const { _id, price, image, name } = cartItem;
            const seletedItem = { _id, name, image, price, email: user.email }
            fetch('http://localhost:5000/carts', {
                method: "POST",
                headers: {
                    'content-type':'application/json'
                },
                body: JSON.stringify(seletedItem)
            })
            .then(res=>res.json())
            .then(data=>{
                if (data.insertedId) {
                    // refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Coures Added On Cart!!',
                        showConfirmButton: false,
                        timer: 2500
                      })
                }
            })
        }

    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl" style={object.availableSeats < 0 ? { background: 'red' } : null} >
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
                    <button onClick={() => handleCart(object)} disabled={object.availableSeats === 0} className="btn btn-primary">Select</button>
                </div>
            </div>
        </div>
    );
};

export default CouresCart;