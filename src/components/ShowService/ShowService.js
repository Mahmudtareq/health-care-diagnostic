import React from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import { useParams } from 'react-router';
import './ShowService.css';

const ShowService = (props) => {
    const { name, details, img, id } = props.service;
    // const { serviceId } = useParams();
    // console.log(props.service)
    return (
        <div className="container">
            <Card className="mt-3" style={{ width: '18rem' }}>
                <Card.Img variant="top" className="img-fluid" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className="text-start">
                        {details}
                    </Card.Text>
                </Card.Body>
                <div className="my-2">


                    <NavLink className="btn btn-outline-success " to={`/ourservices/${id}`}
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red",
                        }}

                    >
                        Details {name}</NavLink>


                </div>


            </Card>

        </div>
    );
};

export default ShowService;