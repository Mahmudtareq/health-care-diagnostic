import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Register.css';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        console.log(data);
    };
    return (
        <div>
            <div>
                <div className="contact-banner ">
                    <div className="row">
                        <div className="col-md-8">
                            <h2 className="text-info my-3">Registration From</h2>
                            <h4 className="text-primary">Please Put Your details In Below</h4>
                            <NavLink className="btn btn-outline-primary w-25 text-white my-3" to="/home">
                                Back To Home
                            </NavLink>
                        </div>

                    </div>
                </div>

            </div>

            <div className="container bg-secondary p-2 my-3">
                <h2 className="text-info mb-4">Registration from</h2>
                <form className="register-from" onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Enter Your Name" defaultValue={user.displayName} {...register("name")} />
                    <input placeholder="Enter Your Email" defaultValue={user.email} {...register("email", { required: true })} />
                    {errors.email && <span className="error">This field is required</span>}
                    <input placeholder="Address" defaultValue="" {...register("address")} />
                    <input placeholder="City" defaultValue="" {...register("city")} />
                    <input placeholder="Phone Number" defaultValue="" {...register("phone")} />
                    <input type="submit" />
                </form>
            </div>


        </div>
    );
};

export default Register;