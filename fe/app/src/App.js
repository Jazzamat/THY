import {IconButton} from '@mui/material';
import './App.css';
import PageSelect from './PageSelect';
import SearchBar from './SearchBar';
import TodoList from './TodoList';
import AddIcon from '@mui/icons-material/Add';
import {useEffect, useState} from 'react';
import CreateForm from './CreateForm';



function App() {

	const todos = [ // hard coded for now
		'Make a reservation for dinner at 6',
		'Feed the cats',
		'File for a divorce',
		'I forgot to remind myself that I need to make a reminder',
		'Subrahmanyan Chandrasekhar: astrophysicist',
	];

	const [creating, setCreating] = useState(false);
	const [search, setSearch] = useState("");

	const searchResults = todos.filter(todo =>
		todo.includes(search)
	);

	function toggleCreate()  {
		setCreating(!creating);
	}

	function handleSearch() {
		console.log("Search is ")
		console.log(search.valueOf())
	}

	function handleCreate() {

		console.log("Handinling Create")
		// Simple POST request with a JSON body using fetch
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json'},
			body: JSON.stringify({ content: 'Remember to submit forms' })
		};
		fetch('http://127.0.0.1:8080', requestOptions)
			.then(response => response.json())
			.then(data => this.setState({ postId: data.id }));

		toggleCreate()
	}

	return (
		<div className="App">

			<header className="App-header">
				<img src={"t.png"} className="App-logo" alt="logo" />
				{creating && (
					<CreateForm handleCreate={handleCreate} toggleCreate={toggleCreate}/>
				)}
				<div className="Hero">
					<div className="UpperBar">
						<SearchBar handleSearch={handleSearch} setSearch={setSearch}/>
						<IconButton onClick={toggleCreate} className="plus">
							<AddIcon className="plus" sx={{fontSize: 40}}/>
						</IconButton>
					</div>
					<TodoList todos={searchResults}/>
					<div className="LowerBar">
						<PageSelect/>
					</div>
				</div>
			</header>
		</div>
	)
}

export default App;

