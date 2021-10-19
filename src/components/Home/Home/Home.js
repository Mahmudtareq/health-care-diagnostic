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
                <p>Lorem ipsum is a dummy text it will use for subtitle here</p>
                <div>
                    <div className="container my-5">
                        <div className="row g-2">
                            <div className="col-6">
                                <div className="p-3 border bg-light">
                                    <h4 className="text-success">Dental Department</h4>
                                    <p>There are many variations of lorem passagei of Lorem Ipsum available but the majority have</p>

                                </div>
                            </div>
                            <div className="col-6">
                                <div className="p-3 border bg-light">
                                    <h4 className="text-success">Pregnency</h4>
                                    <p>There are many variations of lorem passagei of Lorem Ipsum available but the majority have</p>


                                </div>
                            </div>
                            <div className="col-6">
                                <div className="p-3 border bg-light">
                                    <h4 className="text-success">Bond Binding</h4>
                                    <p>There are many variations of lorem passagei of Lorem Ipsum available but the majority have</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="p-3 border bg-light">
                                    <h4 className="text-success">X-Ray</h4>
                                    <p>There are many variations of lorem passagei of Lorem Ipsum available but the majority have</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

            <div className="my-5 container">
                <div className="row mt-3">
                    <div className="col-md-6">
                        <img src={about7} alt="" />

                    </div>
                    <div className="col-md-6">
                        <h2 className="text-info text-class mb-3">We Offer
                            <br />
                            <span className="text-dark">Fast and Reliable</span>
                            <br />
                            <span className="text-danger">Medical and HealthCare</span>
                            <br />
                            <span>Solutions to Our Patients</span>
                        </h2>
                        <p className="text-class">Pellentesque vitae ultrice posuere. Praesent justo laoret dignis ectus etiam ipsum habitant tristique nam est. Donec venentse euvarius cursus massa metus adipiscing ante. Nulla aculis. Donec lorem metus lobortis eu laci nid nec ipsum dignissim sed duil vamas.</p>


                    </div>

                </div>

            </div>

        </div>
    );
};

export default Home;