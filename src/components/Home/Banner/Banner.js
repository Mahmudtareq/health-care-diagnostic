import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import banner1 from '../../../image/banner/banner1.jpg';
import banner2 from '../../../image/banner/banner2.jpg';
import banner3 from '../../../image/banner/banner3.jpg';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className="text-danger bg-info p-2">Your Health Our First Priority</h1>
                        <h3 className="text-info">Always We are try to provide our best service</h3>
                        <p>Not sure what is going on , Come in Today  for a Symptom Checkup ! </p>
                        <button className="btn bg-info my-2 my-btn w-25">Contact Us </button>

                        <button className="btn  ms-2 
                          my-btn w-25">Learn More</button>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h1 className="text-danger bg-info p-2">Your Health Our First Priority</h1>
                        <h3 className="text-info">Always We are try to provide our best service</h3>
                        <p>Not sure what is going on , Come in Today  for a Symptom Checkup ! </p>

                        <button className="btn my-2 bg-info my-btn w-25">Contact Us </button>

                        <button className="btn  ms-2 my-btn w-25">Learn More</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h1 className="text-danger fs-900">Your Health Our First Priority</h1>
                        <p className="text-primary fw-900">We Serve Better Than Any Others</p>
                        <button className="btn bg-info my-2 my-btn w-25">Contact Us </button>

                        <button className="btn  ms-2 my-btn w-25">Learn More</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div >
    );
};

export default Banner;