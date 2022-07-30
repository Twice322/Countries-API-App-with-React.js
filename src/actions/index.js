const countriesLoaded = (newCountries) => {
  return {
    type: "COUNTRIES_LOADED",
    payload: newCountries,
  };
};
const loadMoreCountries = (visible) => {
  return {
    type: "LOAD_MORE_COUNTRIES",
    payload: visible + 20,
  };
};
const loadCountriesByRegion = (newCountries) => {
  return {
    type: "LOAD_COUNTRIES_BY_REGION",
    payload: newCountries,
  };
};
const loadCountryDetails = (country) => {
  console.logf(country);
  return {
    type: "LOAD_COUNTRY_DETAILS",
    payload: country,
  };
};
const errorFounded = (error) => {
  return {
    type: "ERROR_HAPPENED",
    payload: error,
  };
};
const countriesRequested = () => {
  return {
    type: "COUNTRIES_REQUESTED",
  };
};
export {
  countriesLoaded,
  loadMoreCountries,
  loadCountriesByRegion,
  loadCountryDetails,
  errorFounded,
  countriesRequested,
};
