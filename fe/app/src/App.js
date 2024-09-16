import {IconButton} from '@mui/material';
import './App.css';
import SearchBar from './SearchBar';
import TodoList from './TodoList';
import AddIcon from '@mui/icons-material/Add';
import {useEffect, useState} from 'react';
import CreateForm from './CreateForm';


function App() {

	const [todos, setTodos] = useState([]);

	const [init, setInit] = useState(true);
	const [creating, setCreating] = useState(false);
	const [search, setSearch] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const [newTodo, setNewTodo] = useState(null);
	const [fethcedResponse, setFetchedResponse] = useState(null);

	const searchResults = todos.filter(todo =>
		todo.includes(search)
	);

	function toggleCreate()  {
		setCreating(!creating);
	}

	function handleSearch(e) {
		setCurrentPage(1)
		setSearch(e)
	}

	function extractTodos(response) {
		const array = []
		for (const element of response) {
			array.push(element.content)
		}
		console.log("array:")
		console.log(array)
		return array
	}


	function fetchTodos() {
		console.log("Fetching all todos")
		// Simple POST request with a JSON body using fetch
		const requestOptions = {
			method: 'GET',
			headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
		};
		fetch('http://127.0.0.1:8080', requestOptions)
		.then(response => response.json())
			.then(data => {
				console.log(data);
				var todosRaw = extractTodos(data);
				setTodos(todosRaw);
				console.log(fethcedResponse)
			})
			.catch(error => console.error(error));
	}

	function handleCreate(e) {
		console.log("Handinling Create")
		console.log("this is the new content:");
		console.log(newTodo)
		// Simple POST request with a JSON body using fetch
		const requestOptions = {
			method: 'POST',
			headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
			body: JSON.stringify({ content:  newTodo})
		};
		fetch('http://127.0.0.1:8080', requestOptions)
			.then(response => response.json())
			.then(data => {
				console.log(data);
				var todosRaw = extractTodos(data);
				setTodos(todosRaw);
				console.log(fethcedResponse)
			})
			.catch(error => console.error(error));

		toggleCreate()
	};


	if (init) {
		fetchTodos();
		setInit(false);
	}

	return (
		<div className="App">
			<header className="App-header">
				<img src={"thy_todo.png"} className="App-logo" alt="logo" />
				{creating && (
					<CreateForm handleCreate={handleCreate} toggleCreate={toggleCreate} setNewTodo={setNewTodo}/>
				)}
				<div className="Hero">
					<div className="UpperBar">
						<SearchBar handleSearch={handleSearch} setSearch={handleSearch}/>
						<IconButton onClick={toggleCreate} className="plus">
							<AddIcon className="plus" sx={{fontSize: 40}}/>
						</IconButton>
					</div>
					<TodoList todos={searchResults} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
				</div>
			</header>
		</div>
	)
}

export default App;

