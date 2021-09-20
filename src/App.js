import Header from "./components/header/header";
import Countries from "./components/countries/countries";
import RestCountriesAPI from "./components/service/service";
import CountryDetails from "./components/country-details/country-details";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ErrorContainer from "./components/error-container/error-container";
import React from "react";
import { CountriesApiProvider } from "./components/service-context";
import { Provider } from "react-redux";
import store from "./store";
const App = () => {
  const countriesService = new RestCountriesAPI();
  return (
    <div className="App">
      <Provider store={store}>
        <ErrorContainer>
          <CountriesApiProvider value={countriesService}>
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
          </CountriesApiProvider>
        </ErrorContainer>
      </Provider>
    </div>
  );
};

export default App;
