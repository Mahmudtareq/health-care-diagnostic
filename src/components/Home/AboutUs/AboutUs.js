import React from 'react';
import './AboutUs.css';
import { Accordion, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import about2 from '../../../image/about/about2.jpg';
import about4 from '../../../image/about/about4.jpg';
import about5 from '../../../image/about/about5.jpg';
import about6 from '../../../image/about/about6.jpg';

const AboutUs = () => {
    return (
        <>

            <div>
                <Header></Header>
            </div>

            <div className="about-section p-4">
                <h1>About Us</h1>
                <Nav.Link className="text-danger my-btn w-25 mx-auto" as={Link} to="/home">Home</Nav.Link>
            </div>

            <div className="container">
                <div className="row my-5 d-flex justify-content-center m-2">
                    <div className="col-lg-7 col-12 ">
                        <h3 className="mt-5 ms-3"> <span className="text-primary">We Provide Most Professional Service</span>
                            <span className="text-info"> Since 1978</span>  </h3>


                        <p className="text-section mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem loremIpsum has been the </p>

                        <p className="text-section">since the 1500s, when an un known printer took a galley of type and scrambled it to make a type  but also the leap into electronic typesetting,</p>
                        <button className=" btn btn-info mb-2">ReadMore</button>

                    </div>
                    <div className="col-lg-5 col-12">
                        <img width="" className="mt-5 img-fluid" src={about2} alt="" />
                    </div>
                </div>

            </div>




            <div>
                <div className="row d-flux justify-content-center my-5 m-2">
                    <h2 className="mb-5 text-primary">Why Choose Us?</h2>
                    <div className="col mt-5">
                        <Accordion flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header> 1 We are always careful to our patient and service</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header>2 Book and apoinment with any specialist anytime</Accordion.Header>
                                <Accordion.Body>
                                    Lorem Ipsum is simply du my text of the pritin industry. Lorm Ipsum hasbeen the industry’s standardsdummy text eversince the 1500s, when an unknown printer took a galley of type
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>3 We offer lot of service in a best price</Accordion.Header>
                                <Accordion.Body>
                                    Lorem Ipsum is simply du my text of the pritin industry. Lorm Ipsum hasbeen the industry’s standardsdummy text eversince the 1500s, when an unknown printer took a galley of type
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header> 4  Online payment seystem with different method</Accordion.Header>
                                <Accordion.Body>
                                    Lorem Ipsum is simply du my text of the pritin industry. Lorm Ipsum hasbeen the industry’s standardsdummy text eversince the 1500s, when an unknown printer took a galley of typ
                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>


                    </div>
                    <div className="col">
                        <div className="row  justify-content-center">
                            <div className="col-md-5 co-12 d-flex mb-2">
                                <img src={about4} alt="" />

                            </div>
                            <div className="col-md-7  d-flex">
                                <div className="row">
                                    <div className="col col-12">
                                        <img src={about5} alt="" />
                                    </div>
                                    <div className="col col-12 mt-2">
                                        <img src={about6} alt="" />
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>



        </>
    );
};

export default AboutUs;