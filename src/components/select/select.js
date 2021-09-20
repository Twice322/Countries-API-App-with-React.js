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
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadCountriesByRegion, countriesRequested } from "../../actions";
const onSelectClick = (target, setRegion) => {
  setRegion(target.dataset.value);
};
const SelectRegion = ({
  loadCountriesByRegion,
  getData,
  countriesRequested,
}) => {
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
      countriesRequested();
      getData(region.toLowerCase()).then((response) => {
        loadCountriesByRegion(response);
      });
    }
  }, [region]);

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
const mapStateToProps = ({ region }) => {
  return { region };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { loadCountriesByRegion, countriesRequested },
    dispatch
  );
};
export default WithApiService(
  connect(mapStateToProps, mapDispatchToProps)(SelectRegion),
  mapMethodsToProps
);
