import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Login = () => {
    const { signInWithGoogle, registerNewUser } = useAuth();
    return (
        <div>
            <div>
                <div className="contact-banner ">
                    <div className="row">
                        <div className="col-md-8">
                            <h2 className="text-info my-3">Login From</h2>
                            <h4 className="text-primary">To Take our Service Please Sign In</h4>
                            <NavLink className="btn btn-outline-primary w-25 text-white my-3" to="/home">
                                Back To Home
                            </NavLink>
                        </div>

                    </div>
                </div>
            </div>
            <div className="my-5">
                <h2 className="mb-3 text-info">Sign In Please</h2>
                <input className="form-control w-25 mx-auto" type="email" name="" id="" placeholder="Email" />
                <br />
                <input className="form-control w-25 mx-auto" type="password" name="" id="" placeholder="Password" />
                <br />
                <input onClick={registerNewUser} className="form-control w-25 mx-auto bg-info" type="submit" value="Login" />
                <br />
                <div>
                    <p>For New User ? <NavLink to="/register">Create Account</NavLink></p>
                </div>
                <button onClick={signInWithGoogle} className=" w-25 mx-auto btn bg-primary">Google LogIn</button>

            </div>


        </div>
    );
};

export default Login;