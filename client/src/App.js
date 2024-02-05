<<<<<<< HEAD
<<<<<<< HEAD
import React from "react"
import "./App.css"
import ExamView from "./pages/ExamView"
import Navbar from "./components/NavBar" // Import Navbar // Import Navbar

function App() {
	return (
		<div className="App">
			<Navbar /> {/* Render Navbar */}
			<ExamView />
=======
=======
import React from "react"
>>>>>>> d07e010 (testing)
import "./App.css"
import ExamView from "./pages/ExamView"
import Navbar from "./components/NavBar" // Import Navbar // Import Navbar

function App() {
	return (
		<div className="App">
<<<<<<< HEAD
			<header className="App-header">
				{Array.isArray(response) &&
					response.map((exam, index) => <p key={index}>{exam.patientId}</p>)}
			</header>
>>>>>>> 381f817 (fixed repo)
=======
			<Navbar /> {/* Render Navbar */}
			<ExamView />
>>>>>>> d07e010 (testing)
		</div>
	)
}

export default App
