
function Todo({content}) {


	return (
		<div className="Todo">
			<div className="TodoText">
				<h2 className="TodoText">{content}</h2>
			</div>
			<div className="TodoButtons">
				<button className="Button">edit</button>
				<button className="Button">delete</button>
			</div>
		</div>
	);
}

export default Todo;

