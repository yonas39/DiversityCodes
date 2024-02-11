import React, { useState } from "react"
import Home from "./Home"

const Admin = ({ onAddExam }) => {
	const [newExam, setNewExam] = useState({
		patientId: "",
		age: 0,
		sex: "",
		zipCode: 0,
		bmi: 0,
		examId: "",
		keyFindings: "",
		brixiaScores: "",
		imageURL: "",
	})

	const handleInputChange = (e) => {
		const { name, value } = e.target
		setNewExam((prevExam) => ({
			...prevExam,
			[name]: value,
		}))
	}

	const handleAddExam = () => {
		onAddExam(newExam)
		// Clear form after adding exam
		setNewExam({
			patientId: "",
			age: 0,
			sex: "",
			zipCode: 0,
			bmi: 0,
			examId: "",
			keyFindings: "",
			brixiaScores: "",
			imageURL: "",
		})
	}

	return (
		<div
			className="admin-container bg-gray-800 text-white p-6 rounded-lg shadow-lg"
			style={{ height: "100vh", width: "100vw" }}
		>
			<button className="create-new-exam button bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mb-4">
				Create New Exam
			</button>
			<h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
			<form className="space-y-4">
				<label className="block text-white-300 mb-2">
					<span className="mb-1">Patient ID: </span>
					<input
						type="text"
						name="patientId"
						value={newExam.patientId}
						onChange={handleInputChange}
						className="border border-gray-300 rounded-md px-2 py-1 mt-1 bg-gray-700 text-white w-half"
					/>
				</label>

				<label className="block text-white-300 mb-2">
					<span className="mb-1">Age: </span>
					<input
						type="number"
						name="age"
						value={newExam.age}
						onChange={handleInputChange}
						className="border border-gray-300 rounded-md px-2 py-1 mt-1 bg-gray-700 text-white w-half"
					/>
				</label>

				<label className="block text-white-300 mb-2">
					<span className="mb-1">Sex: </span>
					<input
						type="text"
						name="sex"
						value={newExam.sex}
						onChange={handleInputChange}
						className="border border-gray-300 rounded-md px-2 py-1 mt-1 bg-gray-700 text-white w-half"
					/>
				</label>

				<label className="block text-white-300 mb-2">
					<span className="mb-1">Zip Code: </span>
					<input
						type="number"
						name="zipCode"
						value={newExam.zipCode}
						onChange={handleInputChange}
						className="border border-gray-300 rounded-md px-2 py-1 mt-1 bg-gray-700 text-white w-half"
					/>
				</label>

				<label className="block text-white-300 mb-2">
					<span className="mb-1">BMI: </span>
					<input
						type="number"
						name="bmi"
						value={newExam.bmi}
						onChange={handleInputChange}
						className="border border-gray-300 rounded-md px-2 py-1 mt-1 bg-gray-700 text-white w-half"
					/>
				</label>

				<label className="block text-white-300 mb-2">
					<span className="mb-1">Exam ID: </span>
					<input
						type="text"
						name="examId"
						value={newExam.examId}
						onChange={handleInputChange}
						className="border border-gray-300 rounded-md px-2 py-1 mt-1 bg-gray-700 text-white w-half"
					/>
				</label>

				<label className="block text-white-300 mb-2">
					<span className="mb-1">Key Findings: </span>
					<input
						type="text"
						name="keyFindings"
						value={newExam.keyFindings}
						onChange={handleInputChange}
						className="border border-gray-300 rounded-md px-2 py-1 mt-1 bg-gray-700 text-white w-half"
					/>
				</label>

				<label className="block text-white-300 mb-2">
					<span className="mb-1">Brixia Scores: </span>

					<input
						type="text"
						name="brixiaScores"
						value={newExam.brixiaScores}
						onChange={handleInputChange}
						className="border border-gray-300 rounded-md px-2 py-1 mt-1 bg-gray-700 text-white w-half"
					/>
				</label>

				<label className="block text-white-300 mb-2">
					<span className="mb-1">Image URL: </span>
					<input
						type="text"
						name="imageURL"
						value={newExam.imageURL}
						onChange={handleInputChange}
						className="border border-gray-300 rounded-md px-2 py-1 mt-1 bg-gray-700 text-white w-half"
					/>
				</label>

				<button
					type="button"
					onClick={handleAddExam}
					className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
				>
					Add Exam
				</button>
			</form>
		</div>
	)
}

export default Admin
