import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContex } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import Social from "../../../Components/SocialIcon/Social";
import { FaBullseye } from "react-icons/fa";
import { Helmet } from "react-helmet-async";


const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
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
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
            })

    };



    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>Login || SpeakUp</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <p className="text-3xl font-serif text-center">Login</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: true })} type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="flex">
                                <input  {...register("password", { required: true })} type={showPassword ? 'text' : 'password'} placeholder="password" className="input input-bordered" />
                                
                            </div>
                            <div className="flex justify-between">
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <label className="label">
                                    <Link to='/singup' className="label-text-alt link link-hover">Are You New?</Link>
                                </label>
                            </div>
                        </div>
                        <input className="btn btn-outline" type="submit" value="Login" />

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