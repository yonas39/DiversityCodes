import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SinglePatientView() {
  const { patientId } = useParams();
  const [patientData, setPatientData] = useState(null);

  useEffect(() => {
    // Fetch patient data based on patientId
    // Example: Fetch data using patientId and update state
    const fetchPatientData = async () => {
      try {
        const response = await fetch(`pages/ExamView/${patientId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch patient data");
        }
        const data = await response.json();
        setPatientData(data);
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    };

    fetchPatientData();
  }, [patientId]);

  return (
    <div>
      <h1>Patient Details</h1>
      {/* Display patient details */}
      {patientData && (
        <div>
          {/* Display patient details here */}
          <p>Patient ID: {patientData.patientId}</p>
          <p> Exam Id: </p>
          {/* Display other patient details */}
        </div>
      )}
    </div>
  );
}

export default SinglePatientView;
