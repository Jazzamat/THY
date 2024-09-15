import {IconButton} from '@mui/material';
import './App.css';
import PageSelect from './PageSelect';
import SearchBar from './SearchBar';
import TodoList from './TodoList';
import AddIcon from '@mui/icons-material/Add';
import {useEffect, useState} from 'react';
import CreateForm from './CreateForm';



function App() {

const [creating, setCreating] = useState(false);

function toggleCreate()  {
	setCreating(!creating);
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
						<SearchBar/>
						<IconButton onClick={toggleCreate} className="plus">
							<AddIcon className="plus" sx={{fontSize: 40}}/>
						</IconButton>
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

