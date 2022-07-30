import React from "react";
import SelectRegion from "../select/select";
import "./search-and-filter-panel.scss";

const SearchAndFilterPanel = ({ onFilteredItems }) => {
  return (
    <div className="panel">
      <div className="search__input__wrapper">
        <i className="fas fa-search search__icon"></i>
        <input
          type="text"
          placeholder="Search for country..."
          className="search__input"
          onChange={(e) => onFilteredItems(e.target.value)}
        />
      </div>
      <SelectRegion />
    </div>
  );
};

export default SearchAndFilterPanel;
