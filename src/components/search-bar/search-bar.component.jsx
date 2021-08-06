import React from "react";
import "./search-bar.styles.css";

export const SearchBar = ({ placeholder, handleChange }) => (
  <input
    className="search"
    placeholder={placeholder}
    type="search"
    onChange={handleChange}
  />
);
