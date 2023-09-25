import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";


const PaymentChoose = () => {

    // useing localstore for geting data by navigate.
    const location = useLocation();
    const [row, setRow] = useState(null)
    console.log(row);
    useEffect(() => {
        const storedRow = localStorage.getItem('row');
        if (storedRow) {
            setRow(JSON.parse(storedRow));
            localStorage.removeItem('row')
        }
    }, [])
    if (row === null) {
        return <p>loading</p>
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-300 p-10 ">
                    <p className="text-3xl font-serif p-3">Choose Your Payment Method</p>
                    <Link to='/dashbord/stripe-pay' state={{row}}><button className="btn btn-outline">Payment With Stripe</button></Link>
                    <Link><button className="btn btn-outline my-2">Payment With SSL_COMMARCE</button></Link>
                </div>
            </div>
        </div>

    );
};

export default PaymentChoose;