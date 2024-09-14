
import Todo from './Todo.js'

function TodoList() {
	return (
			<div className="TodoList">
				<Todo content="Make a reservations for dinner at 6"></Todo>
				<Todo content="Feed the cats!!!"></Todo>
				<Todo content="File for a divorce"></Todo>
				<Todo content="I forgot to remind myself that I need to make a reminder"></Todo>
			</div>
	);
}

export default TodoList;

