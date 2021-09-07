import React from "react";
import Container from "../container/container";
import "./country-details.scss";
import { WithApiService } from "../higher-order-component";
import { DetailsWrapper } from "../higher-order-component";
import { listNameObj } from "../constants/constants";
import {
  CountryDetailsInfoListItem,
  CountryDetailsInfoList,
  CountryFlag,
  BackBtn,
} from "./country-details-components";

const REGEXP = /(\d)(?=(\d\d\d)+([^\d]|$))/g;

const countryCheckValue = (value) => {
  if (Array.isArray(value)) {
    return value.map((item) => item.name).join(", ");
  }

  if (Number.isInteger(value)) {
    return String(value).replace(REGEXP, "$1,");
  }

  return value;
};

const CountryDetails = ({ countryName, data }) => {
  const { flag, name, borders } = data;
  const countryInfo = Object.entries(listNameObj).map((item) => {
    const [value, field] = item;
    const checkedValue = countryCheckValue(data[value]);
    return (
      <CountryDetailsInfoListItem
        field={field}
        value={checkedValue}
        key={value}
      />
    );
  });
  return (
    <div className="country">
      <Container>
        <BackBtn />
        <div className="country__details">
          <CountryFlag src={flag} />
          <div className="country__info">
            <h1 className="country__title">{name}</h1>
            <CountryDetailsInfoList>{countryInfo}</CountryDetailsInfoList>
            <div className="country__info__list__item borders">
              <h5 className="country__info__list__item__title">
                Bordered countries:
              </h5>
              <ul className="borders__list">
                {borders.map((item, index) => (
                  <li className="borders__list__item" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

const mapMethodsToProps = (apiService) => {
  return apiService.getCountryByName;
};
export default WithApiService(
  DetailsWrapper(CountryDetails),
  mapMethodsToProps
);
