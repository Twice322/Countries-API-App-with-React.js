import React from "react";
import SearchInput from "./search-input/search-input";
import SelectRegion from "../select/select";
import "./search-and-filter-panel.scss";
const SearchAndFilterPanel = ({ term, setTerm }) => {
  return (
    <div className="panel">
      <SearchInput term={term} setTerm={setTerm} />
      <SelectRegion />
    </div>
  );
};

export default SearchAndFilterPanel;
