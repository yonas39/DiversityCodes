import "./App.css"
import { useApi } from "./hooks/use-api"

function App() {
	const { response, error } = useApi({ path: "exams" })

	console.log("response:", response)

	if (error) {
		return <div>Error: {JSON.stringify(error)}</div>
	}

	return (
		<div className="App">
			<header className="App-header">
				{Array.isArray(response) &&
					response.map((exam, index) => <p key={index}>{exam.patientId}</p>)}
			</header>
		</div>
	)
}

export default App
