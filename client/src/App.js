import React from "react";
import "./App.css";
import ExamView from "./pages/ExamView";
import Navbar from "./components/NavBar"; // Import Navbar // Import Navbar

function App() {
  return (
    <div className="App">
      <h1>Hello world !</h1>
      <Navbar /> {/* Render Navbar */}
      <ExamView />
    </div>
  );
}

export default App;
