import React from 'react';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const { signInWithGoogle } = useAuth();
    return (
        <div>
            <h2>Please Login</h2>
            <input className="form-control w-25 mx-auto" type="email" name="" id="" placeholder="Email" />
            <br />
            <input className="form-control w-25 mx-auto" type="password" name="" id="" placeholder="Password" />
            <br />
            <input className="form-control w-25 mx-auto bg-info" type="submit" value="Login" />
            <br />
            <button onClick={signInWithGoogle} className=" w-25 mx-auto btn bg-primary">Google LogIn</button>

        </div>
    );
};

export default Login;