import axios from 'axios';
import { useEffect, useState } from 'react';

const PatientInfo = ({ patientId }) => {
    const [patientInfo, setPatientInfo] = useState({
        age: 'test',
        sex: 'test',
        zipCode: 'test',
        bmi: 'test'
    });

    useEffect(() => {
        axios.get(`/api/patient/${patientId}`)
            .then(response => {
                setPatientInfo(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, [patientId]);

    return (
        <div className='show-patient-info'>
            <p>Age: {patientInfo.age}</p>
            <p>Sex: {patientInfo.sex}</p>
            <p>Zip Code: {patientInfo.zipCode}</p>
            <p>BMI: {patientInfo.bmi}</p>
        </div>
    );
};

export default PatientInfo;