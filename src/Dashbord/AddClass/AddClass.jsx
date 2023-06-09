import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContex } from '../../Providers/AuthProvider';

const AddClass = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useContext(AuthContex);
    console.log(user?.displayName);
    const onSubmit = (data) => {
        console.log(data);

    }
    return (
        <div className='mx-10'>
            <h2 className='text-center text-3xl font-semibold my-4'>Add A New Class</h2>

            <form className='' onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Class name*</span>
                    </label>
                    <input {...register("name", { required: true, maxLength: 120 })} type="text" placeholder="Type Name here" className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Class Image*</span>
                    </label>
                    <input {...register("image", { required: true})} type="text" placeholder="Image Photo Link" className="input input-bordered w-full " />
                </div>
                <div className='flex space-x-5'>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Instructor Name*</span>
                        </label>
                        <input {...register("instructorName", { required: true, maxLength: 120 })} type="text" defaultValue={user?.displayName} readOnly className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Instructor EMail*</span>
                        </label>
                        <input {...register("instructorEmail", { required: true, maxLength: 120 })} type="email" defaultValue={user?.email} readOnly className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Instructor Image*</span>
                    </label>
                    <input {...register("instructorImage", { required: true, maxLength: 120 })} type="text" placeholder="Image Photo Link" className="input input-bordered w-full " />
                </div>
                <div className='flex space-x-5'>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <input {...register("price", { required: true, maxLength: 120 })} type="number" placeholder="Class Price" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Available Seats*</span>
                        </label>
                        <input {...register("availableSeats", { required: true, maxLength: 120 })} type="number" placeholder="Available Seats" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Class Details*</span>
                    </label>
                    <textarea {...register("details", { required: true, maxLength: 500 })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div>
                <input className='btn btn-outline btn-md mt-4' type="submit" value="Add Class" />
            </form>
        </div>
    );
};

export default AddClass;