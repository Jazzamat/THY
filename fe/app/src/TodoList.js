
import {useEffect, useState} from 'react';
import Todo from './Todo.js'

function TodoList({todos}) {



	const [currentPage, setCurrentPage] = useState(1);
	const todosPerPage = 5;

	const lastIndexOfPage = currentPage * todosPerPage;
	const firstIndexOfPage = lastIndexOfPage - todosPerPage;




	const listedItems = todos.map(content =>
		<Todo content={content}></Todo>
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
				<u1 className="PageSelect">
					<li className="PageButton">
						<a href='#' className='PageButton'
							onClick={previousPage}>Prev</a>
					</li>
					{
						numbers.map((n,i) => (
							<li className={`PageButton ${currentPage === n ? 'current': ''}`} key={i}>
								<a href='#' className='PageButton' onClick={() => changeCurrentPage(n)} >{n}</a>
							</li>
						))
					}
					<li className='PageButton'>
					<a href='#' className='PageButton'
					onClick={nextPage}>Next</a>
					</li>
				</u1>
			</nav>
			</div>
</div>
	);
}

export default TodoList;

