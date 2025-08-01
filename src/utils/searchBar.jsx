import { Link } from "react-router-dom";
function SearchBar({link}) {
  return (
    <div className="header">
      <div className="search-bar">
        <label htmlFor="searchBar">Search</label>
        <input id="searchBar" name="searchBar" />
      </div>
      <Link to={link}>
        <button className="add">+</button>
      </Link>
    </div>
  );
}

export default SearchBar;
