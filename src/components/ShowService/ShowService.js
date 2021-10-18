import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './ShowService.css';

const ShowService = (props) => {
    const { name, details, img } = props.service;
    // console.log(props.service)
    return (
        <div className="container">
            <Card className="mt-3" style={{ width: '18rem' }}>
                <Card.Img variant="top" className="img-fluid" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                </Card.Body>
                <div className="my-2">
                    <button className="btn btn-outline-success ">Details   {name}</button>

                </div>


            </Card>

        </div>
    );
};

export default ShowService;