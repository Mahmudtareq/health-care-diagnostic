import { Card, Row } from 'react-bootstrap';
const Doctor = (props) => {
    const { name, img, specialist, title } = props.item;
    // console.log(props.item)
    return (
        <div className="">
            <Row xs={1} md={2} className="g-4 p-3">
                <Card style={{ width: '18rem' }}>
                    <Card.Img className="mt-2 shadow-md" variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Title className="text-info fs-6">{specialist}</Card.Title>
                        <Card.Text>
                            {title}
                        </Card.Text>
                        <button className="btn btn-outline-success">VIEW PROFILE</button>
                    </Card.Body>
                </Card>
            </Row>
        </div>
    );
};

export default Doctor;