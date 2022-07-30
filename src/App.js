import Header from "./components/header/header";
import Countries from "./components/countries/countries";
import CountryDetails from "./components/country-details/country-details";
import "./App.css";
import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter basename="/Countries-API-App-with-React.js-Redux">
        <Header />
        <Routes>
          <Route path={"/"} element={<Countries />} />
          <Route path={"/:name"} element={<CountryDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
