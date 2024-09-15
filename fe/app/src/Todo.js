import {Button, Icon, IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {EditIcon} from "@mui/icons-material/Edit";
import {Edit} from "@mui/icons-material";
function Todo({content}) {


	return (
		<div className="Todo">
			<div className="TodoText">
				<h2 className="TodoText">{content}</h2>
			</div>
			<div className="TodoButtons">
				<IconButton aria-label="edit" style={{color:"white"}}>
					<Edit/>
				</IconButton>
				<IconButton aria-label="delete" style={{color:"black"}}>
					<DeleteIcon/>
				</IconButton>
			</div>
		</div>
	);
}

export default Todo;

