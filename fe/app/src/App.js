import './App.css';
import PageSelect from './PageSelect';
import SearchBar from './SearchBar';
import TodoList from './TodoList';



function handleNew () {
	console.log("CREATING NEW TOTO");
	// Simple POST request with a JSON body using fetch
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ title: 'React POST Request Example' })
	};
	fetch('https://127.0.0.1:8080/api/posts', requestOptions)
		.then(response => response.json())
		.then(data => this.setState({ postId: data.id }));
}

function App() {
	return (
		<div className="App">

			<header className="App-header">
				<img src={"t.png"} className="App-logo" alt="logo" />
				<div className="Hero">
					<div className="UpperBar">
						<SearchBar/>
						<button onClick={handleNew}>new</button>
					</div>
					<TodoList/>
					<div className="LowerBar">
						<PageSelect/>

					</div>

				</div>
			</header>

		</div>


	)
}

export default App;

