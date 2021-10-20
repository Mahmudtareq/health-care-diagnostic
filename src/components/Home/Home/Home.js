import React from 'react';
import MainServices from '../../MainServices/MainServices';
import Banner from '../Banner/Banner';
import './Home.css';
import about7 from '../../../image/about/about7.jpg';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="container my-5">
                <MainServices></MainServices>
            </div>
            <div className="my-5">
                <h2 className="text-primary">We Specialize In</h2>
                <p>We always Try to Provide Our Best services</p>
                <div>
                    <div className="container my-5">
                        <div className="row g-2">
                            <div className="col-lg-6 col-12">
                                <div className="p-3 border bg-light">
                                    <h4 className="text-success">Dental Department</h4>
                                    <p className="text-start">Dentists remove tooth decay, fill   cavities, and repair fractured teeth.
                                        Dentists diagnose and treat problems with patients' teeth, gums, and related parts of the mouth
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="p-3 border bg-light">
                                    <h4 className="text-success">Pregnancy Department</h4>
                                    <p className="text-start">What are the difficulties during pregnancy?
                                        Other conditions that can make pregnancy risky can happen while you are pregnant - for example, gestational diabetes and Rh incompatibility</p>



                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="p-3 border bg-light">
                                    <h4 className="text-success">Bond Binding Department</h4>
                                    <p className="text-start">Molecular binding is an attractive interaction between two molecules that results in a stable association in which the molecules are in close proximity to each other</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="p-3 border bg-light">
                                    <h4 className="text-success ">X-Ray Department</h4>
                                    <p className="text-start">What are X-rays used for?
                                        X-rays can be used to examine most areas of the body. They're mainly used to look at the bones and joints, although they're sometimes used</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

            <div className="my-5 container">
                <h2 className="my-3 text-primary">We Take Care Our Patients</h2>
                <p className="text-info mb-3">Why is medical health important?</p>
                <div className="row mt-3">
                    <div className="col-lg-6 col-12 mt-4 mb-3">
                        <img className="img-fluid" src={about7} alt="" />

                    </div>
                    <div className="col-lg-6 col-12 ">
                        <h2 className="text-info text-class mb-3">We Offer
                            <br />
                            <span className="text-dark">Fast and Reliable</span>
                            <br />
                            <span className="text-danger">Medical and HealthCare</span>
                            <br />
                            <span>Solutions to Our Patients</span>
                        </h2>
                        <p className="text-class">Medical care has several important functions other than restoring or maintaining health. These other functions are assessment and certification of health status, prognostication, segregation of the ill to limit communication of illness, and helping to cope with the problems of illness--the caring function</p>


                    </div>

                </div>

            </div>

        </div>
    );
};

export default Home;