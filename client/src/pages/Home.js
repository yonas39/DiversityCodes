import React from "react";
import { useApi } from "../hooks/use-api";
import { useState } from "react";

const Home = () => {
  const [search, setSearch] = useState("");
  console.log(search);
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
        Search :
        <input type="text" onChange={(e) => setSearch(e.target.value)}></input>
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
              .filter((exam) => {
                return (
                  exam != null &&
                  (search.trim() === "" ||
                    (exam &&
                      exam.patientId &&
                      exam.patientId
                        .toLowerCase()
                        .includes(search.trim().toLowerCase())))

                  // ALL the search filters I added are optional we can use or get-rid of them if we want to ...
                  // ||
                  // exam.age
                  //   .toString()
                  //   .toLowerCase()
                  //   .includes(search.trim().toLowerCase()) ||
                  // exam.sex
                  //   .toLowerCase()
                  //   .includes(search.trim().toLowerCase()) ||
                  // exam.zipCode
                  //   .toString()
                  //   .toLowerCase()
                  //   .includes(search.trim().toLowerCase()) ||
                  // exam.bmi
                  //   .toString()
                  //   .toLowerCase()
                  //   .includes(search.trim().toLowerCase()) ||
                  // exam.examId
                  //   .toLowerCase()
                  //   .includes(search.trim().toLowerCase()) ||
                  // exam.keyFindings
                  //   .toLowerCase()
                  //   .includes(search.trim().toLowerCase()) ||
                  // exam.brixiaScores
                  //   .toLowerCase()
                  //   .includes(search.trim().toLowerCase())
                );
              })
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
