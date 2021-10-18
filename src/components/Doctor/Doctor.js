import React from 'react';
import { Card } from 'react-bootstrap';
const Doctor = (props) => {
    const { name, img, specialist, title } = props.item;
    // console.log(props.item)
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title>{specialist}</Card.Title>
                    <Card.Text>
                        {title}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Doctor;