import {Button, IconButton} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({setSearch, handleSearch}) {
	return (
		<div className="SearchBarDiv">
			<input className="SearchBar" placeholder={"Search"} onChange={e => setSearch(e.target.value)}>
			</input>
			<IconButton onClick={handleSearch} unselectable="true">
				<SearchIcon/>
			</IconButton> 
		</div>
	);
}

export default SearchBar;

