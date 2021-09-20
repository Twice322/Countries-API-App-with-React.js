import React, { Fragment } from "react";
import { CountryItem } from "../country-item/country-item";
import MoreButton from "../more-button/moreButton";
import { WithApiService } from "../higher-order-component";
import { connect } from "react-redux";
import "./countries-list.scss";

const showVisibleContent = (content, visible) => {
  if (content instanceof Error) {
    throw new Error("Can be troubles with fetching...");
  }
  return content.slice(0, visible).map((country) => {
    const { id, ...restCountry } = country;
    return (
      <Fragment key={id}>
        <CountryItem {...restCountry} />
      </Fragment>
    );
  });
};

const CountriesList = ({ visibleData, visible }) => {
  const countriesItems = showVisibleContent(visibleData, visible);
  return (
    <Fragment>
      <div className="countries__list">{countriesItems}</div>
      <MoreButton visibleData={visibleData} />
    </Fragment>
  );
};

const mapMethodsToProps = (apiService) => {
  return apiService.getAllCountries;
};

const mapStateToProps = ({ countriesList, visible }) => {
  return { countriesList, visible };
};

export default WithApiService(
  connect(mapStateToProps)(CountriesList),
  mapMethodsToProps
);
