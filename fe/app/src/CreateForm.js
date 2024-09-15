import {Button} from "@mui/material";

function CreateForm({toggleCreate, handleCreate}) {
	return (
		<div className="CreateForm">
				New Todo
			<input className="newTodoInput" placeholder="Todo..."></input>
			<div>
				<Button style={{backgroundColor: "#c70a0c", color: "white"}} onClick={handleCreate}>
					Create
				</Button> 
				<Button style={{color:"grey"}} onClick={toggleCreate}>
					Cancel
				</Button>
			</div>
		</div>
	);
}

export default CreateForm;

