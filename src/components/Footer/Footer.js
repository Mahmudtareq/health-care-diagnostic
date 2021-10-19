import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faPhone,
    faClock
} from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
    return (
        <div>
            <div className="footer-container bg-dark p-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 text-white">
                            <div className="left-container text-start ">
                                <h3 className="text-primary">Safe Medical Care</h3>
                                <div className="icons-container d-flex text-center ">
                                </div>
                                <p className="mt-2 ">
                                    <small>
                                        We Providing Life Changing Experiences Through Education. Class That Fit Your Busy Life. Closer to Home
                                    </small>
                                </p>
                                <p className="">
                                    <small><FontAwesomeIcon icon={faPhone} /> +8801831874069</small>
                                </p>
                                <p className="">
                                    <small><FontAwesomeIcon icon={faClock} />  Sat - Fri  <span className="text-info">24 Hours</span> </small>
                                </p>
                                <p className="mt-2">
                                    <small>Tareq © mahmud . All rights reserved.</small>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 text-white">
                            <h3 className=" text-primary">The Services</h3>
                            <div className=" footer-menu-container mt-4">
                                <p>Cancer Oncology</p>
                                <p>Dental Surgery</p>
                                <p>Diagnose and Research</p>
                                <p>Drug and  Medicines</p>


                            </div>
                        </div>

                        <div className="col-md-4 text-white">
                            <h3 className="text-primary">Departments</h3>
                            <div className="right-footer-container mt-4">
                                <p>Surgery Department </p>
                                <p>Dental Department</p>
                                <p>Cardiology Department</p>
                                <p>Eye Department</p>
                                <p>Neurology Department </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;