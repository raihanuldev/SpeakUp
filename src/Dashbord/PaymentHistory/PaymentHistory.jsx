import { useContext } from "react";
import { useEffect } from "react";
import { AuthContex } from '../../Providers/AuthProvider'
import { useState } from "react";
import PaymentInfo from "./PaymentInfo";

const PaymentHistory = () => {
    const { user } = useContext(AuthContex);
    const [paymentsData, setPaymentsData] = useState([])

    useEffect(() => {
        if (user.email) {
            fetch(`http://localhost:5000/payment-history?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setPaymentsData(data)
                })
        }
    }, [user.email])
    return (
        <div>
            <h3 className="text-4xl text-center font-semibold">Payment History</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Transaction Id</th>
                            <th>Coures Id</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            paymentsData.map((item, index) => <PaymentInfo key={item._id} item={item} index={index}></PaymentInfo>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;