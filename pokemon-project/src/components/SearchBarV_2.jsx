import React from "react";
import "../styles/SearchBarV_2.css";

const SearchBarV_2 = ({ searchTerm, setSearchTerm }) => {
  const handleChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  return (
    <input
      type="text"
      placeholder="Search for Pokémon..."
      value={searchTerm}
      onChange={handleChange}
      className="search-bar-V2"
    />
  );
};

export default SearchBarV_2;
