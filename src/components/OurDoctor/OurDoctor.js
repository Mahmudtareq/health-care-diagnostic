
import { Accordion } from 'react-bootstrap';
import Doctors from '../Doctors/Doctors';



const OurDoctor = () => {

    return (
        <div className="container my-5">

            <h2 className="text-primary">Meet Our Doctors</h2>
            <p>Trust the professionals</p>
            <div>----------------@-----------------</div>
            <div className="doctors-container">
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
                        <div className="mb-3 d-flex">
                            <input type="text" className="form-control w-50" id="exampleFormControlInput1" placeholder="Enter Your Name" />
                            <input type="email" className="form-control w-50 ms-2" id="exampleFormControlInput1" placeholder="Enter Your Email" />
                            <input type="text" className="form-control w-50 ms-2" id="exampleFormControlInput1" placeholder="Enter Phone Number" />
                        </div>

                        <div className="my-5">
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write About Your Problem"></textarea>
                        </div>
                        <button className="btn btn-info w-25">Submit</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OurDoctor;