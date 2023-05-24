import { useState } from "react";
import "./searchbar.css";
function SearchBar({ facts, handleSearch }) {

  const [term, setTerm] = useState("");

  const handleChange = (event) => {
    setTerm(event.target.value);
  };
  const display = (event) => {


  };
  return (
    <div className="search-bar">
      <input value={term} onChange={(term) => handleChange(term)} />
      <button onClick={() => handleSearch(term)}> Search </button>
    </div>
  );
}

export default SearchBar;
