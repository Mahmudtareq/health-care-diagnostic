import React from 'react';
import './AboutUs.css';
import { Accordion, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTags } from "@fortawesome/free-solid-svg-icons";



import about2 from '../../image/about/about2.jpg'
// import about3 from '../../image/about/about3.jpg'
import about4 from '../../image/about/about4.jpg'
import about5 from '../../image/about/about5.jpg'
import about6 from '../../image/about/about6.jpg'
import about8 from '../../image/about/about8.jpg'

const AboutUs = () => {
    return (
        <>

            <div className="about-section p-4">
                <h1>About Us</h1>
                <Nav.Link className="text-danger my-btn w-25 mx-auto" as={Link} to="/home">Home</Nav.Link>
            </div>

            <div className="row my-5 container">
                <div className="col-lg-6 col-12 mb-3">
                    <img className="img-fluid" src={about8} alt="" />

                </div>
                <div className="col-lg-6 col-12">
                    <h3 className="text-start ms-3 p-2 text-primary">We Provide Essential Services
                        <br />
                        For Your Health Care</h3>
                    <p className="text-start ms-3 p-2">To view all of WHO’s country and technical guidance on COVID-19 please visit our publications hub
                        Access the publications
                        COVID-19:
                        When health systems are overwhelmed, both direct mortality from an outbreak and indirect mortality from vaccine-preventable and treatable conditions increase dramatically. Countries will need to make difficult decisions to balance the demands of responding directly to COVID-19</p>
                    <div className="ms-5">
                        <p className="text-start"><span className="text-primary me-2"> <FontAwesomeIcon icon={faTags} /></span>24 Hours Emergency Assistance Call Us</p>
                        <p className="text-start"><span className="text-primary me-2"> <FontAwesomeIcon icon={faTags} /></span>We are committed to providing healthcare service</p>
                        <p className="text-start"><span className="text-primary me-2"> <FontAwesomeIcon icon={faTags} /></span>Really know the true needs and expectations of patients</p>

                    </div>
                    <button className="btn btn-text">More About Us ...</button>



                </div>
            </div>




            <div className="container">
                <div className="row my-5 d-flex justify-content-center m-2">
                    <div className="col-lg-7 col-12 ">
                        <h3 className="mt-5 ms-3"> <span className="text-primary">We Provide Most Professional Service</span>
                            <span className="text-info"> Since 1978</span>  </h3>
                        <p className="mt-3 text-start">
                            A minimal list would include physicians, nurses, nurse practitioners, physician's assistants, pharmacists, social workers, dietitians, physical and occupational therapists, and medical technologists. </p>

                        <p className="text-start">What is considered a medical professional?
                            Medical professionals include doctors, nurses, hospice workers, emergency medical technicians, and other trained caregivers.</p>
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
                    <div className="col mt-5 mb-4">
                        <Accordion flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header> <span className="me-2 text-danger">
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </span> We are always careful to our patients and service</Accordion.Header>
                                <Accordion.Body className="text-start">
                                    If you didn’t know already, we’ll remind you that heart diseases are the leading cause of death in women aged 40 and over! More than half our patients who seek the best cardiologists in Dwarka are women!! This figure would be true for all hospitals that are offering heart treatment in Dwarka

                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    <span className="me-2 text-danger">
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </span>
                                    Book and appointment with any specialist anytime</Accordion.Header>
                                <Accordion.Body className="text-start">
                                    What is book an appointment?
                                    Definitions of appointment book. a book containing a calendar and space to keep a record of appointments. synonyms: appointment calendar. type of: book. a written work or composition that has been published (printed on pages bound together)
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    <span className="me-2 text-danger">
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </span> We offer lot of service in a best price</Accordion.Header>
                                <Accordion.Body className="text-start">

                                    PRM (Passengers with Reduced Mobility)
                                    These are passengers who, due to physical, mental or health limitations, require additional assistance that is not offered to passengers as standard. PRM distinguishes between medical and non-medical cases
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header><span className="me-2 text-danger">
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </span>Online payment system with different method</Accordion.Header>
                                <Accordion.Body className="text-start">
                                    What means online payment?
                                    An electronic payment (e-payment), in short, can be simply defined as paying for goods or services on the internet.
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