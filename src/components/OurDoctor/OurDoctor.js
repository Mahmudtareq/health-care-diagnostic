
import Doctors from '../Doctors/Doctors';



const OurDoctor = () => {

    return (
        <div className="container">
            <h2 className="text-primary">OUR DOCTORS</h2>
            <div className="doctors-container">
                <Doctors></Doctors>
            </div>

        </div>
    );
};

export default OurDoctor;