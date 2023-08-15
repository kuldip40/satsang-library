import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [selectTag, setSelectTag] = useState("subject");

  const handleSearch = (e) => {
    e.preventDefault();

    if (!searchInput) return;

    const data = {
      searchInput,
      tag: selectTag,
    };
    console.log(data);
  };

  return (
    <nav className="navbar">
      <form className="search-container">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <select
          className="select-tag"
          value={selectTag}
          onChange={(e) => setSelectTag(e.target.value)}
        >
          <option value="subject">Subject</option>
          <option value="character">Character</option>
          <option value="characterWith">Character With</option>
          <option value="matter">Matter</option>
        </select>
        <span className="search-icon" onClick={handleSearch}>
          🔍
        </span>
      </form>
      <button className="add-button">Add</button>
    </nav>
  );
};

export default Navbar;
