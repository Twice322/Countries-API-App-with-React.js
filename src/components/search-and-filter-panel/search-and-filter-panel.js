import React from "react";
import SearchInput from "../search-input/search-input";
import SelectRegion from "../select/select";
import "./search-and-filter-panel.scss";
const SearchAndFilterPanel = ({ setData, term, setTerm }) => {
  return (
    <div className="panel">
      <SearchInput term={term} setTerm={setTerm} />
      <SelectRegion setData={setData} />
    </div>
  );
};

export default SearchAndFilterPanel;
