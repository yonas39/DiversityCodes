import React, { useState } from "react";
import Home from "./Home";

const Admin = ({ onAddExam }) => {
  const [newExam, setNewExam] = useState({
    patientId: "",
    age: 0,
    sex: "",
    zipCode: 0,
    bmi: 0,
    examId: "",
    keyFindings: "",
    brixiaScores: "",
    imageURL: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExam((prevExam) => ({
      ...prevExam,
      [name]: value,
    }));
  };

  const handleAddExam = () => {
    onAddExam(newExam);
    // Clear form after adding exam
    setNewExam({
      patientId: "",
      age: 0,
      sex: "",
      zipCode: 0,
      bmi: 0,
      examId: "",
      keyFindings: "",
      brixiaScores: "",
      imageURL: "",
    });
  };

  return (
    <div className="admin-container">
      {/* Admin page: Needs more work 
       Should display all the data along with some additonal buttons wth their functionality
        i.e 
          1. Create New file button--> to redirect to a page that looks like the one below
          2. update and delete button for each entry
      */}
      {/* need to add functionality to this button */}
      <button className="create-new-exam button"> Create New Exam </button>
      <h2>
        Admin Page: needs some work! This is supposed to be for "Create New
        Exam"
      </h2>
      <form>
        <label>Patient ID:</label>
        <input
          type="text"
          name="patientId"
          value={newExam.patientId}
          onChange={handleInputChange}
        />

        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={newExam.age}
          onChange={handleInputChange}
        />

        <label>Sex:</label>
        <input
          type="text"
          name="sex"
          value={newExam.sex}
          onChange={handleInputChange}
        />

        <label>Zip Code:</label>
        <input
          type="number"
          name="zipCode"
          value={newExam.zipCode}
          onChange={handleInputChange}
        />

        <label>BMI:</label>
        <input
          type="number"
          name="bmi"
          value={newExam.bmi}
          onChange={handleInputChange}
        />

        <label>Exam ID:</label>
        <input
          type="text"
          name="examId"
          value={newExam.examId}
          onChange={handleInputChange}
        />

        <label>Key Findings:</label>
        <input
          type="text"
          name="keyFindings"
          value={newExam.keyFindings}
          onChange={handleInputChange}
        />

        <label>Brixia Scores:</label>
        <input
          type="text"
          name="brixiaScores"
          value={newExam.brixiaScores}
          onChange={handleInputChange}
        />

        <label>Image URL:</label>
        <input
          type="text"
          name="imageURL"
          value={newExam.imageURL}
          onChange={handleInputChange}
        />

        <button type="button" onClick={handleAddExam}>
          Add Exam
        </button>
      </form>

      <Home />
    </div>
  );
};

export default Admin;
