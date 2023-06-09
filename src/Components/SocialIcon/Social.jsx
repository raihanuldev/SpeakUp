import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContex } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
const Social = () => {
    const [erros,setError] = useState('');
    const {googleSign} = useContext(AuthContex);
    const navigate = useNavigate();
    
    // googleSign
    const handleGoogle=()=>{
        googleSign()
        .then(data=>{
            console.log(data.user);
            setError('')
            const loggedUser=data.user;
            // const user = {name: loggedUser.displayName,email: loggedUser.email,role:"student"}
            // console.log(user);

            navigate('/')
        })
        .catch(error=>{
            console.log(error);
            setError(error.message)
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
            {
                erros && <p className="text-red-600">{erros}</p>
            }
        </div>
    );
};

export default Social;