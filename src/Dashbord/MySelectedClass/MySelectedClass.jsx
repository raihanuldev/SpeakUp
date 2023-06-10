import React from 'react';
import UseCart from '../../Hooks/UseCart';

const MySelectedClass = () => {
    const [cart] = UseCart();
    console.log(cart);
    return (
        <div>
            <h2 className="text-center font-semibold text-4xl">MY SELECTED CLASSES</h2>
        </div>
    );
};

export default MySelectedClass;