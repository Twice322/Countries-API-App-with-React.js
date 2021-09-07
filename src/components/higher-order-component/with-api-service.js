import React from "react";
import { Consumer } from "../service-context";

const WithApiService = (Component, mapMethodsToProps) => {
  return (props) => {
    return (
      <Consumer>
        {(apiService) => {
          const serviceProps = mapMethodsToProps(apiService);
          return <Component {...props} getData={serviceProps} />;
        }}
      </Consumer>
    );
  };
};
export default WithApiService;
