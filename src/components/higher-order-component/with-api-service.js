import React from "react";
import { CountriesApiConsumer } from "../service-context";

const WithApiService = (Component, mapMethodsToProps) => {
  return (props) => {
    return (
      <CountriesApiConsumer>
        {(apiService) => {
          const serviceProps = mapMethodsToProps(apiService);
          return <Component {...props} getData={serviceProps} />;
        }}
      </CountriesApiConsumer>
    );
  };
};
export default WithApiService;
