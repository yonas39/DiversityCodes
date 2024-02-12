import React from "react"
import { useApi } from "../hooks/use-api"

function ExamView() {
    const { response, error } = useApi({ path: "exams" })

    if (error) {
        return <div>Error: {JSON.stringify(error)}</div>
    }

    if (!response) {
        return <div>Loading exams data...</div>
    }

    return (
        <div className="admin-container bg-gray-800 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Exam View</h2>
            {response && response.exams && Array.isArray(response.exams) && (
                <table className="border-collapse border border-gray-600 w-full">
                    <thead>
                        <tr className="bg-gray-700">
                            <th className="px-4 py-2">Patient ID</th>
                            <th className="px-4 py-2">Age</th>
                            <th className="px-4 py-2">Sex</th>
                            <th className="px-4 py-2">Zip Code</th>
                            <th className="px-4 py-2">BMI</th>
                            <th className="px-4 py-2">Exam ID</th>
                            <th className="px-4 py-2">Key Findings</th>
                            <th className="px-4 py-2">Brixia Scores</th>
                            <th className="px-4 py-2">Image URL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {response.exams
                            .filter((exam) => exam != null)
                            .map((exam, index) => (
                                <tr key={exam._id || index} className="bg-gray-800">
                                    <td className="border border-gray-600 px-4 py-2">{exam.patientId}</td>
                                    <td className="border border-gray-600 px-4 py-2">{exam.age}</td>
                                    <td className="border border-gray-600 px-4 py-2">{exam.sex}</td>
                                    <td className="border border-gray-600 px-4 py-2">{exam.zipCode}</td>
                                    <td className="border border-gray-600 px-4 py-2">{exam.bmi}</td>
                                    <td className="border border-gray-600 px-4 py-2">{exam.examId}</td>
                                    <td className="border border-gray-600 px-4 py-2">{exam.keyFindings}</td>
                                    <td className="border border-gray-600 px-4 py-2">{exam.brixiaScores}</td>
                                    <td className="border border-gray-600 px-4 py-2">
                                        <a href={exam.imageURL} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">View Image</a>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default ExamView
