import './App.css';
import PageSelect from './PageSelect';
import SearchBar from './SearchBar';
import TodoList from './TodoList';

function App() {
	return (
		<div className="App">

			<header className="App-header">
				<img src={"t.png"} className="App-logo" alt="logo" />
				<div className="Hero">
					<div className="UpperBar">
						<SearchBar/>
						<button>new</button>
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

