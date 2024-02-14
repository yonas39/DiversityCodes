import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useApi } from "hooks/use-api";
import ExamView from "pages/ExamView";

function SinglePatientView() {
  const { patientId } = useParams();
  const [patientData, setPatientData] = useState(null);

  const { response, error } = useApi({ path: `exams/${patientId}` }); // Fetch specific Patient data

  useEffect(() => {
    if (response && response.exam) {
      setPatientData(response.exam);
    }
  }, [response]);

  return (
    <div>
      <h1>Single Exam View</h1>
      {error && <div>Error: {JSON.stringify(error)}</div>}
      {!patientData && !error && <div>Loading Patient data...</div>}
      {patientData && <ExamView PatientId={patientData} />}
    </div>
  );
}

export default SinglePatientView;
