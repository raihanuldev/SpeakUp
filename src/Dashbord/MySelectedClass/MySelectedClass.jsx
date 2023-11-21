import React from 'react';
import UseCart from '../../Hooks/UseCart';
import Row from './Row';
import { Helmet } from 'react-helmet-async';

const MySelectedClass = () => {

    const [cart] = UseCart();
    console.log(cart);

    return (
        <div>
            <Helmet>
                <title>
                    My Cart || SpeakUp
                </title>
            </Helmet>
            <div className="flex flex-row items-center justify-between pe-2 bg-zinc-900 py-4 rounded-sm">
                <p className="text-sm text-white md:text-white font-semibold border-l-4 border-primary ml-2 inline-block px-2 md:px-5">
                MY SELECTED CLASSES
                </p>
            </div>
            {/* <h2 className="text-center font-semibold text-4xl">MY SELECTED CLASSES</h2> */}

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cart.map((row, index) => <Row key={row._id} row={row} index={index}></Row>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MySelectedClass;