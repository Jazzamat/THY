import {Button, IconButton} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({setSearch, handleSearch}) {
	return (
		<div className="SearchBarDiv">
			<input className="SearchBar" placeholder={"Search"} onChange={e => handleSearch(e.target.value)}>
			</input>
			<IconButton onClick={handleSearch} disabled="true">
				<SearchIcon/>
			</IconButton> 
		</div>
	);
}

export default SearchBar;

