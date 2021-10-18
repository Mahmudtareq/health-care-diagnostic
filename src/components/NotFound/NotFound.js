import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notfound from '../../image/notfound/notfound.png';

const NotFound = () => {
    return (
        <div>
            <img width="560px" src={notfound} alt="" />
            <br />
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
        </div>
    );
};

export default NotFound;