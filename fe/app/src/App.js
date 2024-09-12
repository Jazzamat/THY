import './App.css';
import SearchBar from './SearchBar';
import TodoList from './TodoList';

function App() {
	return (
		<div className="App">

			<header className="App-header">
				<img src={"t.png"} className="App-logo" alt="logo" />
			<SearchBar/>
			<TodoList/>
			</header>
			
		</div>


	)
}

export default App;

