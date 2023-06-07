import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContex } from "../../Providers/AuthProvider";
const Social = () => {
    const {googleSign} = useContext(AuthContex);
    
    // googleSign
    const handleGoogle=()=>{
        googleSign()
        .then(data=>{
            console.log(data.user);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div>
            <div className='divider mt-0'></div>
            <div className="text-center my-2">
                <button onClick={handleGoogle} className="btn btn-outline btn-circle text-2xl">
                    <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default Social;