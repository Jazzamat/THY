
import {Button} from "@mui/material";
import {useState} from "react";

function UpdateForm({toggleUpdating, handleUpdate, setNewTodo}) {
	return (
		<div className="">
			<form className="CreateForm" onSubmit={handleUpdate}>
				Update
			<input className="newTodoInput" placeholder="Todo..." onChange={e => setNewTodo(e.target.value)} required></input>
			<div>
				<Button style={{backgroundColor: "#c70a0c", color: "white"}} type="submit" >
					Update
				</Button> 
				<Button style={{color:"grey"}} onClick={toggleUpdating}>
					Cancel
				</Button>
			</div>
			</form>
		</div>
	);
}

export default UpdateForm;

