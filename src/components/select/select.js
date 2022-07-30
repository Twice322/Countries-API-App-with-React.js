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
import { useDispatch } from "react-redux";
import { useGetCountryByRegionQuery } from "../../store/countriesApi";
import { setData } from "../../store/slices/countriesSlice";

const onSelectClick = (target, setRegion) => {
  setRegion(target.dataset.value);
};

const SelectRegion = () => {
  const [active, setActive] = useState(false);
  const [region, setRegion] = useState("");
  const { data, isLoading } = useGetCountryByRegionQuery(region, {
    skip: !region,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    document.addEventListener("click", ({ target }) =>
      clickOutsideHandler(target, active, setActive)
    );
    return document.removeEventListener("click", ({ target }) =>
      clickOutsideHandler(target, active, setActive)
    );
  }, [active]);

  useEffect(() => {
    dispatch(setData(data));
  }, [data]);

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

export default SelectRegion;
