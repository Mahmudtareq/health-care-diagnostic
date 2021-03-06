
import { Accordion } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Doctors from '../Doctors/Doctors';

const OurDoctor = () => {

    return (
        <div className="">
            <div>
                <div className="contact-banner ">
                    <div className="row">
                        <div className="col-md-8">
                            <h2 className="text-info my-3">Meet Our Doctors</h2>
                            <h4 className="text-primary">Trust the professionals</h4>

                            <NavLink className="btn btn-outline-primary text-white my-3 px-4" to="/home">
                                Back To Home
                            </NavLink>
                        </div>

                    </div>
                </div>
            </div>

            <div className="doctors-container container">
                <Doctors></Doctors>
            </div>

            <div className="container">
                <h2 className="my-5 text-info">Frequently asked questions</h2>
                <div>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header> About Our Services</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>About Our Qualified Doctors</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>About Our Great Infrastructure</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>About Our Emergency Departments</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className="my-5">
                    <h2 className="text-info my-4"> Book An Appointment </h2>
                    <div>
                        <div className="mb-3">
                            <div className="row">
                                <div className="col-lg-4 col-12 mb-2">
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" />
                                </div>
                                <div className="col-lg-4 col-12 mb-2">
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email" />

                                </div>
                                <div className="col-lg-4 col-12">
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Phone Number" />

                                </div>

                            </div>
                        </div>

                        <div className="my-3">
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="Write About Your Problem"></textarea>
                        </div>
                        <button className="btn btn-info">Submit From</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OurDoctor;