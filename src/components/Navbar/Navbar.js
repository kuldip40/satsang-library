import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-input" />
        <select className="select-tag">
          <option value="subject">Subject</option>
          <option value="character">Character</option>
          <option value="characterWith">Character With</option>
          <option value="matter">Matter</option>
        </select>
        <span className="search-icon">🔍</span>
      </div>
      <button className="add-button">Add Item</button>
    </nav>
  );
};

export default Navbar;
