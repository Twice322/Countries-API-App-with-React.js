import React, { useEffect, useState } from "react";
import Container from "../container/container";
import "./country-details.scss";
import { WithApiService } from "../higher-order-component";
import { listNameObj } from "../constants/constants";
import {
  CountryDetailsInfoListItem,
  CountryDetailsInfoList,
  CountryFlag,
  BackBtn,
} from "./country-details-components";
import { connect } from "react-redux";
import Loader from "../loader/loader";
import { bindActionCreators } from "redux";
import { loadCountryDetails } from "../../actions";
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

const CountryDetails = ({
  countryName,
  getData,
  loadCountryDetails,
  countryDetails,
}) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getData(countryName).then((response) => {
      loadCountryDetails(...response);
      setLoading(false);
    });
  }, [countryName]);

  if (!loading) {
    const { flag, name, borders } = countryDetails;
    const countryInfo = Object.entries(listNameObj).map((item) => {
      const [value, field] = item;
      const checkedValue = countryCheckValue(countryDetails[value]);
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
  } else {
    return <Loader />;
  }
};

const mapMethodsToProps = (apiService) => {
  return apiService.getCountryByName;
};
const mapStateToProps = ({ countryDetails }) => {
  return { countryDetails };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ loadCountryDetails }, dispatch);
};
export default WithApiService(
  connect(mapStateToProps, mapDispatchToProps)(CountryDetails),
  mapMethodsToProps
);
