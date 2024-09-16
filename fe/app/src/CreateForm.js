import {Button} from "@mui/material";
import {useState} from "react";

function CreateForm({toggleCreate, handleCreate, setNewTodo}) {



	return (
		<div className="">
			<form className="CreateForm" onSubmit={handleCreate}>
				New Todo
			<input className="newTodoInput" placeholder="Todo..." onChange={e => setNewTodo(e.target.value)} required></input>
			<div>
				<Button style={{backgroundColor: "#c70a0c", color: "white"}} type="submit" >
					Create
				</Button> 
				<Button style={{color:"grey"}} onClick={toggleCreate}>
					Cancel
				</Button>
			</div>
			</form>
		</div>
	);
}

export default CreateForm;

