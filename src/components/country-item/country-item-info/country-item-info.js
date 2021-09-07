import React from "react";
import "../country-item.scss";

const CountryDescription = ({ children }) => {
  return <div className="country__item__description">{children}</div>;
};
const CountryFlag = ({ src }) => {
  return <img src={src} className="country__item__flag" alt={"country flag"} />;
};
const CountryInfoBlock = ({ children }) => {
  return (
    <div className="country__item__info__block">
      <ul>{children}</ul>
    </div>
  );
};
const InfoListItem = ({ field, value }) => {
  return (
    <li className="country__item__info">
      <h5>{field}:</h5>
      <span className="country__item__info_value">{value}</span>
    </li>
  );
};
const CountryHeader = ({ name }) => {
  return (
    <div className="country__item__title">
      <h1>{name}</h1>
    </div>
  );
};

export {
  CountryDescription,
  InfoListItem,
  CountryInfoBlock,
  CountryHeader,
  CountryFlag,
};
