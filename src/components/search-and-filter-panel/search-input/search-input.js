import React from "react";
import "./search-input.scss";
const SearchInput = ({ term, setTerm }) => {
  return (
    <div className="search__input__wrapper">
      <i className="fas fa-search search__icon"></i>
      <input
        type="text"
        placeholder="Search for country..."
        className="search__input"
        value={term}
        onChange={({ target }) => setTerm(target.value)}
      />
    </div>
  );
};

export default SearchInput;
