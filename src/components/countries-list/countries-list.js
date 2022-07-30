import React, { Fragment } from "react";
import { CountryItem } from "../country-item/country-item";
import "./countries-list.scss";

const CountriesList = ({ items }) => {
  return (
    <Fragment>
      <div className="countries__list">
        {items.map((item) => (
          <CountryItem {...item} />
        ))}
      </div>
    </Fragment>
  );
};

export default CountriesList;
