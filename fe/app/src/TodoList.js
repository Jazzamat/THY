
import {useEffect, useState} from 'react';
import Todo from './Todo.js'

function TodoList({todos}) {

	const listedItems = todos.map(content =>
		<Todo content={content}></Todo>
	);

	return (
		<div className="TodoList">
			{listedItems}
		</div>
	);
}

export default TodoList;

