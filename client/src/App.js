import React from "react";
import "./App.css";
// import ExamView from "./pages/ExamView";
import Home from "./pages/Home";
import Navbar from "./components/NavBar"; // Import Navbar // Import Navbar

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Render Navbar */}
      <Home />
      {/* <ExamView /> */}
    </div>
  );
}

export default App;
