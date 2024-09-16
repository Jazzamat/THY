
import Todo from './Todo.js'

function TodoList({todos, currentPage, setCurrentPage, handleDelete}) {
	const todosPerPage = 5;
	const lastIndexOfPage = currentPage * todosPerPage;
	const firstIndexOfPage = lastIndexOfPage - todosPerPage;


	const listedItems = todos.map(todo =>
		<Todo content={todo.content} id={todo.id} handleDelete={handleDelete}></Todo>
	);

	const paginatedlistedItems = listedItems.slice(firstIndexOfPage, lastIndexOfPage)
	const numberOfPages = Math.ceil(todos.length/ todosPerPage);
	const numbers = [...Array(numberOfPages + 1).keys()].slice(1)

	function nextPage() {
		if(currentPage !== numberOfPages) {
			setCurrentPage(currentPage + 1)
		}
	}

	function previousPage() {
		if(currentPage !== 1) {
			setCurrentPage(currentPage - 1)
		}
	}

	function changeCurrentPage(n) {
		setCurrentPage(n);
	}

	return (
		<div>
			<div className="TodoList">
				{paginatedlistedItems}
			</div>
			<div className="LowerBar">
				<nav>
					<ul className="PageSelect">
						<li className="NextPrevButton">
							<a href='#' className='PageButton'
							onClick={previousPage}>Prev</a>
						</li>
						{
							numbers.map((n,i) => (
								<li className={`PageButton ${currentPage === n ? 'active': ''}`} key={i}>
									<a href='#' className='PageButton' onClick={() => changeCurrentPage(n)} >{n}</a>
								</li>
							))
						}
						<li className='NextPrevButton'>
							<a href='#' className='PageButton'
							onClick={nextPage}>Next</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default TodoList;

