import React from "react";
import { Route, Routes, Switch } from "react-router-dom";
import "./App.css";

// import ExamView from "./pages/ExamView";
import Home from "./pages/Home";
import Navbar from "./components/NavBar"; // Import Navbar
import Admin from "./pages/Admin";
import ExamView from "pages/ExamView";

import SinglePatientView from "components/SinglePatientView";
import SingleExamView from "components/SingleExamView";

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Render Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="admin" element={<Admin />} />
        <Route path="exam" element={<ExamView />} />

        {/*    */}
        <Route path="/exam/:examId" element={<SingleExamView />} />
        <Route path="/patient/:patientId" element={<SinglePatientView />} />
      </Routes>
    </div>
  );
}

export default App;
