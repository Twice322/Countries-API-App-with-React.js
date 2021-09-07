import { indexedAlphaCode } from "../constants/constants";

export default class RestCountriesAPI {
  _apiUrl = "https://restcountries.eu/rest/v2/";
  transformData = (country) => {
    return {
      name: country["name"],
      population: +country["population"],
      region: country["region"],
      capital: country["capital"],
      flag: country["flag"],
      id: country["numericCode"],
      nativeName: country["nativeName"],
      subregion: country["subregion"],
      topLevelDomain: country["topLevelDomain"][0],
      currencies: country["currencies"][0].name,
      languages: country["languages"],
    };
  };

  getAllCountries = async () => {
    return await fetch(this._apiUrl + "all")
      .then((response) => response.json())
      .then((data) => data.map((country) => this.transformData(country)))
      .catch((error) => error);
  };

  getCountriesByRegion = async (region) => {
    return await fetch(this._apiUrl + `region/${region}`)
      .then((response) => response.json())
      .then((data) => data.map((country) => this.transformData(country)))
      .catch((error) => error);
  };

  getCountryByName = async (name) => {
    return await fetch(this._apiUrl + `name/${name}`)
      .then((response) => response.json())
      .then((data) =>
        data.map((country) => {
          const bordersObj = {
            borders: country["borders"].map((item) =>
              indexedAlphaCode[item] ? indexedAlphaCode[item].name : item
            ),
          };
          return Object.assign(this.transformData(country), bordersObj);
        })
      )
      .catch((error) => error);
  };
}
