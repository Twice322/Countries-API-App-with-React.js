import React from "react";
import "../country-details.scss";

const CountryDetailsInfoList = ({ children }) => {
  return <ul className="country__info__list">{children}</ul>;
};

const CountryDetailsInfoListItem = ({ field, value }) => {
  return (
    <li className="country__info__list__item" id="population">
      <h5 className="country__info__list__item__title">{field}:</h5>
      <span>{value}</span>
    </li>
  );
};
const CountryFlag = ({ src }) => {
  return <img src={src} className="country__flag" alt={"country flag"} />;
};

const BackBtn = () => {
  return (
    <div className="back__btn__wrapper">
      <button className="back__btn" onClick={() => window.history.back()}>
        <i className="fas fa-long-arrow-alt-left"></i>
        <span className="back__btn__text">Back</span>
      </button>
    </div>
  );
};

export {
  CountryDetailsInfoList,
  CountryDetailsInfoListItem,
  CountryFlag,
  BackBtn,
};
