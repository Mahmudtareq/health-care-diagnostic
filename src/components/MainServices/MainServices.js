import React, { useEffect, useState } from 'react';
import ShowService from '../ShowService/ShowService';
import './MainServices.css';

const MainServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div>
                <h2 className="text-info">Our <span className="text-primary">Services</span> </h2>
            </div>
            <div className="service-container">
                {
                    services.map(service => <ShowService
                        key={service.name}
                        service={service}
                    ></ShowService>)
                }

            </div>

        </div>
    );
};

export default MainServices;