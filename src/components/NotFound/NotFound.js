import React from 'react';
import { NavLink } from 'react-router-dom';
import notfound from '../../image/notfound/notfound.png';

const NotFound = () => {
    return (
        <div>

            <div>
                <img width="560px" src={notfound} alt="" />

            </div>
            <div>
                <NavLink className="btn btn-outline-primary w-25 text-white my-3" to="/home">
                    Back To Home
                </NavLink>
            </div>

        </div>
    );
};

export default NotFound;