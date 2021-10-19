import React from 'react';
import { NavLink } from 'react-router-dom';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div>
            <div className="contact-banner ">
                <div className="row">
                    <div className="col-md-8">
                        <h2 className="text-info my-3">CONTACT US</h2>
                        <h4 className="text-primary">Hello. Welcome. What a pleasure it is to have you.</h4>

                        <NavLink className="btn btn-outline-primary w-25 text-white my-3" to="/home">
                            Home
                        </NavLink>
                    </div>

                </div>
            </div>

            <div className="my-5">
                <div className="container my-5  overflow-hidden">
                    <div className="row gy-5">
                        <div className="col-4">
                            <div className="p-3 border bg-light">Plot 38, Street 39, Lakshmipur, Sadar, Lakshmipur
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="p-3 border bg-light">+522 234 5678
                                <br />

                                +0088 126 58740</div>
                        </div>
                        <div className="col-4">
                            <div className="p-3 border bg-light">info@safehospital.org
                                care@domain.com</div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container my-5">
                <h1>Drop <span className="text-primary">us a MESSAGE</span></h1>
                <p>Purus sapien consequat vitae sagittis facilisis
                </p>
                <div>
                    <div className="mb-3">
                        <div className="d-flex justify-content-center my-4">
                            <input type="text" className="form-control w-50 m-1" id="exampleFormControlInput1" placeholder="FULL NAME" />

                            <input type="text" className="form-control w-50 m-1" id="exampleFormControlInput1" placeholder="SUBJECT" />

                        </div>
                        <div className="d-flex justify-content-center">
                            <input type="email" className="form-control w-50 m-1" id="exampleFormControlInput1" placeholder="EMAIL" />
                            <input type="text" className="form-control w-50 m-1" id="exampleFormControlInput1" placeholder="PHONE" />
                        </div>
                    </div>
                    <div className="my-5">
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" placeholder="YOUR MESSAGE"></textarea>
                    </div>
                    <div>
                        <button className="btn btn-design w-25">SEND MESSAGE</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactUs;