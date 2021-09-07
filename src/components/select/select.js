import React, { useState, useEffect } from "react";
import "./select.scss";
import {
  clickOutsideHandler,
  toggleActive,
} from "../help-functions/help-functions";
import {
  SelectItem,
  SelectHeader,
} from "./select-components/select-components";
import { WithApiService } from "../higher-order-component";
const onSelectClick = (target, setRegion) => {
  if (target.classList.contains("select__item")) {
    setRegion(target.dataset.value);
  }
};

const SelectRegion = ({ getData, setData }) => {
  const [active, setActive] = useState(false);
  const [region, setRegion] = useState("Filter by region");

  useEffect(() => {
    // Check if user clicked outside the select menu then close it
    document.addEventListener("click", ({ target }) =>
      clickOutsideHandler(target, active, setActive)
    );
    return document.removeEventListener("click", ({ target }) =>
      clickOutsideHandler(target, active, setActive)
    );
  }, [active]);
  useEffect(() => {
    if (region !== "Filter by region") {
      getData(region.toLowerCase()).then((response) => {
        setData(response);
      });
    }
  }, [region, getData, setData]);

  return (
    <div className="select" onClick={() => toggleActive(setActive, active)}>
      <SelectHeader region={region} />
      <div
        className={active ? "select__body active" : "select__body"}
        onClick={({ target }) => onSelectClick(target, setRegion)}
      >
        <SelectItem value={"Africa"} dataField={"Africa"} />
        <SelectItem value={"Americas"} dataField={"Americas"} />
        <SelectItem value={"Asia"} dataField={"Asia"} />
        <SelectItem value={"Europe"} dataField={"Europe"} />
        <SelectItem value={"Oceania"} dataField={"Oceania"} />
      </div>
    </div>
  );
};
const mapMethodsToProps = (apiService) => {
  return apiService.getCountriesByRegion;
};

export default WithApiService(SelectRegion, mapMethodsToProps);
