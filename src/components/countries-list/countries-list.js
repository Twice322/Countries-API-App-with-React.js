import React, { Fragment } from "react";
import { useState } from "react/cjs/react.development";
import { CountryItem } from "../country-item/country-item";
import { MoreButton } from "../more-button/moreButton";
import DataWrapper from "../higher-order-component/with-data";
import { WithApiService } from "../higher-order-component";
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

const CountriesList = ({ data }) => {
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(20);
  const countriesItems = showVisibleContent(data, visible);
  return (
    <Fragment>
      <div className="countries__list">{countriesItems}</div>
      <MoreButton
        visible={visible}
        setVisible={setVisible}
        loaded={loaded}
        setLoaded={setLoaded}
        amount={data ? data.length : null}
      />
    </Fragment>
  );
};

const mapMethodsToProps = (apiService) => {
  return apiService.getAllCountries;
};
export default WithApiService(DataWrapper(CountriesList), mapMethodsToProps);
