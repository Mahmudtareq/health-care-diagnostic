import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
const Login = () => {
    const { signInWithGoogle, handleRegistration, handleEmailChange, handlePasswordChange, error, toggleLogin, isLogin } = useAuth();


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
                <from>
                    <h2 className="mb-3 text-info">Please {isLogin ? 'Login' : 'Register'}</h2>
                    <input className="form-control w-25 mx-auto" type="email" onBlur={handleEmailChange} name="" id="" placeholder="Email" required />
                    <br />
                    <input className="form-control w-25 mx-auto" type="password" onBlur={handlePasswordChange} name="" id="" placeholder="Password" required />
                    <br />
                    <input onChange={toggleLogin} className="form-check-input me-2" type="checkbox" value="" id="flexCheckChecked" />
                    <label class="form-check-label" htmlFor="flexCheckChecked">
                        Already Registered ?
                    </label>
                    <span className="ms-2 text-danger">For New User ? <NavLink to="/register">Create Account</NavLink></span>

                    <br />
                    <input onClick={handleRegistration} className="form-control w-25 mx-auto mt-3 bg-info" type="submit" value={isLogin ? 'Login' : "Register"} />

                    <div className="text-danger">
                        {error}
                    </div>
                </from>


                <br />
                <div>

                </div>

                <button onClick={signInWithGoogle} className=" w-25 mx-auto btn bg-primary"><span className="text-danger me-3
                "><FontAwesomeIcon icon={faGoogle} /></span>   Google LogIn</button>

            </div>

        </div>
    );
};

export default Login;