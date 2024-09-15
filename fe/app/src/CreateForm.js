
import {Button, IconButton} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

function CreateForm() {
	return (
		<div className="CreateForm">
				
				New Todo
			<input className="newTodoInput" placeholder="Todo..."></input>
			<div>
				<Button style={{backgroundColor: "#c70a0c", color: "white"}}>
					Create
				</Button> 
				<Button style={{color:"grey"}}>
					Cancel
				</Button>
			</div>
		</div>
	);
}

export default CreateForm;

