import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';
const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div className="">

            <div className=" doctor-container mt-4">
                {
                    doctors.map(item => <Doctor
                        item={item}

                    ></Doctor>)
                }

            </div>

        </div>
    );
};

export default Doctors;