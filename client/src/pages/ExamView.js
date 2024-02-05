import React, { useEffect } from "react"
import { useApi } from "../hooks/use-api"

function ExamView() {
	const { response, error } = useApi({ path: "exams" })

	useEffect(() => {
		console.log("Response:", response)
		if (response && Array.isArray(response)) {
			response.forEach((exam, index) => {
				console.log("Patient ID:", exam.patientId)
				console.log("Age:", exam.age)
				console.log("Sex:", exam.sex)
				console.log("Zip Code:", exam.zipCode)
				console.log("BMI:", exam.bmi)
				console.log("Exam ID:", exam.examId)
				console.log("Key Findings:", exam.keyFindings)
				console.log("Brixia Scores:", exam.brixiaScores)
			})
		}
	}, [response])

	if (error) {
		return <div>Error: {JSON.stringify(error)}</div>
	}

	return (
		<div className="ExamView">
			{response && Array.isArray(response) && (
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
						{response.map((exam, index) => {
							console.log("Patient ID:", exam.patientId)
							console.log("Age:", exam.age)
							console.log("Sex:", exam.sex)
							console.log("Zip Code:", exam.zipCode)
							console.log("BMI:", exam.bmi)
							console.log("Exam ID:", exam.examId)
							console.log("Key Findings:", exam.keyFindings)
							console.log("Brixia Scores:", exam.brixiaScores)
							console.log("Image URL:", exam.imageURL)
							return (
								<tr key={index}>
									<td>{exam.patientId}</td>
									<td>{exam.age}</td>
									<td>{exam.sex}</td>
									<td>{exam.zipCode}</td>
									<td>{exam.bmi}</td>
									<td>{exam.examId}</td>
									<td>{exam.keyFindings}</td>
									<td>{exam.brixiaScores}</td>
									<td>{exam.imageURL}</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			)}
		</div>
	)
}

export default ExamView
