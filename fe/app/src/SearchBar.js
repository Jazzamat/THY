import {Button, IconButton} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
	return (
		<div className="SearchBarDiv">
			<input className="SearchBar" placeholder={"Search"} >
				
			</input>
			<IconButton>
				<SearchIcon/>
			</IconButton> 
		</div>
	);
}

export default SearchBar;

