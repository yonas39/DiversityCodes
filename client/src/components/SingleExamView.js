import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useApi } from "../hooks/use-api"; // Import the useApi hook
import ExamView from "pages/ExamView";

const SingleExamView = () => {
  const { examId } = useParams();
  const { response, error } = useApi({ path: `exams/${examId}` }); // Fetch specific exam data

  const [examData, setExamData] = useState(null);

  useEffect(() => {
    if (response && response.exam) {
      setExamData(response.exam);
    }
  }, [response]);

  return (
    <div>
      <h1>Single Exam View</h1>
      {error && <div>Error: {JSON.stringify(error)}</div>}
      {!examData && !error && <div>Loading exam data...</div>}
      {examData && <ExamView examId={examData} />}
    </div>
  );
};

export default SingleExamView;
