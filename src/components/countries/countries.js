import React, { useState, useEffect } from "react";
import CountriesList from "../countries-list/countries-list";
import Container from "../container/container";
import SearchAndFilterPanel from "../search-and-filter-panel/search-and-filter-panel";
import { searchCountry } from "../help-functions/help-functions";
import ErrorContainer from "../error-container/error-container";
import { connect } from "react-redux";
import { WithApiService } from "../higher-order-component";
import { bindActionCreators } from "redux";
import { countriesLoaded, errorFounded } from "../../actions";
import Loader from "../loader/loader";
import { countriesRequested } from "../../actions";
import "./countries.scss";

const Countries = ({ countriesList, term, setTerm }) => {
  const visibleData = searchCountry(term, countriesList);
  return (
    <ErrorContainer>
      <section className="countries">
        <Container>
          <SearchAndFilterPanel term={term} setTerm={setTerm} />
          <CountriesList term={term} visibleData={visibleData} />
        </Container>
      </section>
    </ErrorContainer>
  );
};
const CountriesContainer = ({
  countriesList,
  getData,
  countriesLoaded,
  loading,
  countriesRequested,
}) => {
  useEffect(() => {
    // console.log(loading);
    countriesRequested();
    getData()
      .then((res) => {
        countriesLoaded(res);
      })
      .catch((error) => errorFounded(error));
  }, []);
  const [term, setTerm] = useState("");
  if (!loading) {
    return (
      <Countries countriesList={countriesList} term={term} setTerm={setTerm} />
    );
  }

  return <Loader />;
};

const mapMethodsToProps = (apiService) => {
  return apiService.getAllCountries;
};
const mapStateToProps = ({ countriesList, loading, error }) => {
  return { countriesList, loading, error };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ countriesLoaded, countriesRequested }, dispatch);
};

export default WithApiService(
  connect(mapStateToProps, mapDispatchToProps)(CountriesContainer),
  mapMethodsToProps
);
