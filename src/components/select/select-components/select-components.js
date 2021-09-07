import React from "react";
import "../select.scss";

const SelectHeader = ({ region }) => {
  return (
    <div className="select__header">
      <span>{region}</span>
      <i className="fas fa-chevron-down"></i>
    </div>
  );
};

const SelectItem = ({ value, dataField }) => {
  return (
    <div className="select__item" data-value={dataField}>
      {value}
    </div>
  );
};
export { SelectItem, SelectHeader };
