import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import depart1 from '../../image/depart/depart1.jpg';
import depart2 from '../../image/depart/depart2.jpg';
import depart3 from '../../image/depart/depart3.jpg';

const OurServices = () => {
    const { id } = useParams();
    const [serviceDetails, setServiceDetails] = useState([]);
    const [singleService, setSingleService] = useState({})
    useEffect(() => {
        fetch('/serviceDetails.json')
            .then(res => res.json())
            .then(data => setServiceDetails(data.employee))
    }, [])

    useEffect(() => {

        const foundEmployee = serviceDetails.find((employee) => employee.id === id);
        setSingleService(foundEmployee);

    }, [serviceDetails]);

    return (
        <div>
            <div className="">
                <div className="contact-banner ">
                    <div className="row">
                        <div className="col-md-8">
                            <h2 className="text-info my-3">Show Details Our Services</h2>
                            <h4 className="text-primary">Hello Welcome Our Service !</h4>

                            <NavLink className="btn btn-outline-primary px-4 text-white my-3" to="/home">
                                Back To Home
                            </NavLink>
                        </div>

                    </div>
                </div>
                <div className="container">
                    <Container className=" mt-5">
                        <Row>
                            <Col md={4}>
                                <Card>
                                    <Card.Img className="" variant="top" src={singleService?.img} />
                                </Card>
                            </Col>
                            <Col md={5}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>{singleService?.name}</Card.Title>
                                        <Card.Text>
                                            {singleService?.details}
                                        </Card.Text>
                                        <p className="text-info">Contact : {singleService?.phone}</p>
                                        <Button className=" btn btn-outline-primary">More....</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>

                </div>

            </div>
            <div className="container my-5">

                <h2 className="text-info my-5">DEPARTMENTS</h2>
                <CardGroup >
                    <Card className="m-2">
                        <Card.Img variant="top" className="img-fluid" src={depart1} />
                        <Card.Body>
                            <Card.Title>Cancer Oncology</Card.Title>
                            <Card.Text>
                                Vestibulum maximus ipsum sed nulla dictum ullamcorper...

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <button className="btn btn-outline-primary">READ MORE</button>
                        </Card.Footer>
                    </Card>
                    <Card className="m-2">
                        <Card.Img variant="top" src={depart2} />
                        <Card.Body>
                            <Card.Title>Dental Surgery</Card.Title>
                            <Card.Text>
                                Aenean ullamcorper, leo id rutrum convallis velitm...
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <button className="btn btn-outline-primary">READ MORE</button>
                        </Card.Footer>
                    </Card>
                    <Card className="m-2">
                        <Card.Img variant="top" src={depart3} />
                        <Card.Body>
                            <Card.Title>Diagnose And Research</Card.Title>
                            <Card.Text>
                                Donec leo arcu, tincidunt sit amet justo ut, commodo scelerisq..
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <button className="btn btn-outline-primary">READ MORE</button>
                        </Card.Footer>
                    </Card>
                </CardGroup>

            </div>

        </div>
    );
};

export default OurServices;