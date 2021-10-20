import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import banner4 from '../../../image/banner/banner4.jpg';
import banner2 from '../../../image/banner/banner2.jpg';
import banner5 from '../../../image/banner/banner5.jpg';

const Banner = () => {
    return (
        <div className="">
            <Carousel>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={banner4}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className="text-danger bg-info p-2">Your Health Our First Priority</h1>
                        <h3 className="text-info">Always We are try to provide our best service</h3>
                        <p>Not sure what is going on , Come in Today  for a Symptom Checkup ! </p>
                        <div className="">
                            <button className="btn bg-info my-2 my-btn px-4">Contact Us </button>

                            <button className="btn  ms-2 my-btn px-4">Learn More</button>

                        </div>


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

                        <button className="btn my-2 bg-info my-btn px-4">Contact Us </button>

                        <button className="btn  ms-2 my-btn px-4">Learn More</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner5}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h1 className="text-danger fs-900">Your Health Our First Priority</h1>
                        <p className="text-primary fw-900">We Serve Better Than Any Others</p>
                        <button className="btn bg-info my-2 my-btn px-4">Contact Us </button>

                        <button className="btn  ms-2 my-btn px-4">Learn More</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div >
    );
};

export default Banner;