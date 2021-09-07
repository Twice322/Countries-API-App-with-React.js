import Header from "./components/header/header";
import Countries from "./components/countries/countries";
import RestCountriesAPI from "./components/service/service";
import CountryDetails from "./components/country-details/country-details";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ErrorContainer from "./components/error-container/error-container";
import React from "react";
import { Provider } from "./components/service-context";

const App = () => {
  const countriesService = new RestCountriesAPI();
  return (
    <div className="App">
      <ErrorContainer>
        <Provider value={countriesService}>
          <Router>
            <Header />
            <Switch>
              <Route
                path={"/"}
                render={() => {
                  return <Countries />;
                }}
                exact
              />
              <Route
                path={"/country/:name"}
                render={({ match }) => {
                  return <CountryDetails countryName={match.params.name} />;
                }}
              />
            </Switch>
          </Router>
        </Provider>
      </ErrorContainer>
    </div>
  );
};

export default App;
