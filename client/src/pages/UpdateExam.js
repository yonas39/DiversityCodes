import React, { useState } from "react";
import PatientInfo from "components/PatientInfo";
import { useNavigate } from 'react-router-dom';

const UpdateExam = ({ onUpdate, examId, patientId }) => {
    const navigate = useNavigate();

    const [updateExam, setUpdateExam] = useState({
        // all of these values should be populated with the current exam data
        // user can change any info except patientId and examId
        patientId: "",
        examId: "",
        age: 0,
        sex: "",
        bmi: 0,
        zipCode: 0,
        imageURL: "",
        keyFindings: "",
        brixiaScores: "",
    });

    const handleUpdate = (newExam) => {
        setUpdateExam(prevState => ({
            ...prevState,
            ...newExam
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(updateExam);
    };

    return (
        <div className="main-update-container">
            <div>
                <h1 className="update-title">Updating Exam #{examId}</h1>
                <h2 className="update-title">patientId #{patientId}</h2>
            </div>
            <div className="update-exam-form">
                <form onSubmit={handleSubmit}>
                    <label>
                        Age:
                        <input type="number" value={updateExam.age} onChange={e => handleUpdate({ age: e.target.value })} />
                    </label>
                    <label>
                        Sex:
                        <input type="text" value={updateExam.sex} onChange={e => handleUpdate({ sex: e.target.value })} />
                    </label>
                    <label>
                        ZipCode:
                        <input type="text" value={updateExam.zipCode} onChange={e => handleUpdate({ sex: e.target.value })} />
                    </label>
                    <label>
                        BMI:
                        <input type="text" value={updateExam.bmi} onChange={e => handleUpdate({ sex: e.target.value })} />
                    </label>
                    <label>
                        Key Findings:
                        <input type="text" value={updateExam.keyFindings} onChange={e => handleUpdate({ sex: e.target.value })} />
                    </label>
                    <label>
                        Brixia Scores:
                        <input type="text" value={updateExam.brixiaScores} onChange={e => handleUpdate({ sex: e.target.value })} />
                    </label>
                    <label>
                        Image URL:
                        <input type="text" value={updateExam.imageURL} onChange={e => handleUpdate({ sex: e.target.value })} />
                    </label>
                    <div className="updateButtons-bar">
                        <div>
                            <button type="submit" className="update-buttons">
                                Update Exam
                            </button>
                            <button type="submit" className="update-buttons" onClick={() => navigate('/admin')}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="show-patient-info">
                <PatientInfo patientId={patientId} />  
            </div>
        </div>
    );

};





export default UpdateExam;
