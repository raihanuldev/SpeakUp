import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCcStripe, FaMoneyBillWave } from "react-icons/fa";

const PaymentChoose = () => {
  // useing localstore for geting data by navigate.
  const location = useLocation();
  const [row, setRow] = useState(null);
  console.log(row);
  useEffect(() => {
    const storedRow = localStorage.getItem("row");
    if (storedRow) {
      setRow(JSON.parse(storedRow));
      localStorage.removeItem("row");
    }
  }, []);
  if (row === null) {
    return <p>loading</p>;
  }
  // ssl Payment function
  const sslPayBtn = () => {
    console.log(row);
    fetch("http://localhost:5000/sslPay", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(row),
    })
      .then((res) => res.json())
      .then((result) => {
        window.location.replace(result.url);
        console.log(result);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-300 p-10 ">
          <p className="text-3xl font-serif p-3 mb-4">Payment With </p>
          <Link to="/dashbord/stripe-pay" state={{ row }}>
            <button className="btn btn-outline">
              {" "}
              <FaCcStripe /> Stripe
            </button>
          </Link>
          <button onClick={sslPayBtn} className="btn btn-outline my-2">
            <FaMoneyBillWave /> SSL_COMMARCE
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentChoose;
