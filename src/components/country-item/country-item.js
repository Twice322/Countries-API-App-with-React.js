import React from "react";
import "./country-item.scss";
import { NavLink } from "react-router-dom";
import {
  CountryInfoBlock,
  InfoListItem,
  CountryHeader,
  CountryDescription,
  CountryFlag,
} from "./country-item-info/country-item-info";
export const CountryItem = ({ flag, name, population, region, capital }) => {
  const regExp = /(\d)(?=(\d\d\d)+([^\d]|$))/g;
  return (
    <NavLink to={`country/${name}`} className="country__item">
      <CountryFlag src={flag} />
      <CountryDescription>
        <CountryInfoBlock>
          <CountryHeader name={name} />
          <InfoListItem
            field="Population"
            value={String(population).replace(regExp, "$1,")}
          />
          <InfoListItem field={"Region"} value={region} />
          <InfoListItem field={"Capital"} value={capital} />
        </CountryInfoBlock>
      </CountryDescription>
    </NavLink>
  );
};
