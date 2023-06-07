import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContex } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import Social from "../../../Components/SocialIcon/Social";


const Login = () => {
    const navigate = useNavigate();
    const [MyError, setError] = useState('')
    const { LoginUser } = useContext(AuthContex);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const handleshowPassword = () => {
        setShowPassword(!showPassword)
    }
    const onSubmit = data => {
        setError('')
        console.log(data);
        LoginUser(data.email, data.password)
            .then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/')
            })
            .catch(error => {
                setError(error.message)
            })

    };



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email",{required:true})} type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password",{required:true})} type={showPassword ? 'text' : 'password'} placeholder="password" className="input input-bordered" />
                            <span
                                onClick={handleshowPassword}
                                className="toggle-icon"
                            >
                                {showPassword ? 'Hide Password' : 'Show Password'}
                            </span>
                            <div className="flex justify-between">
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <label className="label">
                                    <Link to='/singup' className="label-text-alt link link-hover">Are You New? Singup</Link>
                                </label>
                            </div>
                        </div>
                        <input className="btn btn-primary" type="submit" value="Login" />

                    </form>
                    <Social></Social>
                    {
                        MyError && <p className="text-red-600">{MyError}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;