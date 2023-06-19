import { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { HiOutlineBookOpen } from "react-icons/hi2";
import Rating from "react-rating";
import CouresCart from "../../Components/CouresCart/CouresCart";
import { Helmet } from "react-helmet-async";

const Classes = () => {

    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('https://speakup-ivory.vercel.app/allclasses')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    return (
        <div>
            <div>
                <Helmet>
                    <title>CLASSES || SpeakUp</title>
                </Helmet>
            </div>
            <div className="grid md:grid-cols-3 gap-2">
                {
                    classes.map(object => <CouresCart key={object._id} object={object} ></CouresCart>)
                }
            </div>
        </div>
    );
};


/**
 * 
 * 
 * 
 * **/
export default Classes;