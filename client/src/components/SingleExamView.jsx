import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ExamView from "pages/ExamView";

const SingleExamView = () => {
  const { examId } = useParams();
  const [examData, setExamData] = useState(null);

  useEffect(() => {
    const fetchExamData = async () => {
      try {
        // Assuming this endpoint fetches the specific exam data
        const response = await fetch(`/api/exams/${examId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch exam data");
        }
        const data = await response.json();
        setExamData(data);
      } catch (error) {
        console.error("Error fetching exam data:", error);
      }
    };

    fetchExamData();
  }, [examId]);

  return (
    <div>
      <h1>Single Exam View</h1>
      {examData ? (
        <ExamView exam={examData} />
      ) : (
        <div>Loading exam data...</div>
      )}
    </div>
  );
};

export default SingleExamView;
