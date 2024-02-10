import React from "react";
import { useApi } from "../hooks/use-api";
import { useEffect } from "react";

const Home = () => {
  const { response, error } = useApi({ path: "exams" });

  if (error) {
    return <div>Error: {JSON.stringify(error)}</div>;
  }

  // Display a loading message if the response has not yet been received
  if (!response) {
    return <div>Loading exams data...</div>; // This is where you add the loading indicator
  }

  return (
    <div className="ExamView">
      <p>
        {/* We need to add the functionaltiy for this search bar */}
        Search : <input type="text"></input>
      </p>
      {response && response.exams && Array.isArray(response.exams) && (
        <table>
          <thead>
            <tr>
              <th>Patient ID</th>
              <th>Age</th>
              <th>Sex</th>
              <th>Zip Code</th>
              <th>BMI</th>
              <th>Exam ID</th>
              <th>Key Findings</th>
              <th>Brixia Scores</th>
              <th>Image URL</th>
            </tr>
          </thead>
          <tbody>
            {response.exams
              .filter((exam) => exam != null)
              .map((exam, index) => (
                <tr key={exam._id || index}>
                  <td>{exam.patientId}</td>
                  <td>{exam.age}</td>
                  <td>{exam.sex}</td>
                  <td>{exam.zipCode}</td>
                  <td>{exam.bmi}</td>
                  <td>{exam.examId}</td>
                  <td>{exam.keyFindings}</td>
                  <td>{exam.brixiaScores}</td>
                  <td>
                    <a
                      href={exam.imageURL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Image
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
