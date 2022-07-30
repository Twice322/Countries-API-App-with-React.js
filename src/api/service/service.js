import { indexedAlphaCode } from "../../components/constants/constants";

export default class RestCountriesAPI {
  _apiUrl = "https://restcountries.com/v2/";
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
      currencies: country?.currencies || "Валюта неизвестна",
      languages: country["languages"],
      alphaCode: country["alpha2Code"],
    };
  };

  getAllCountries = async () => {
    return await fetch(this._apiUrl + "all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        return data.map((country) => this.transformData(country));
      })
      .catch((error) => error);
  };

  getCountriesByRegion = async (region) => {
    return await fetch(this._apiUrl + `region/${region}`)
      .then((response) => response.json())
      .then((data) => data.map((country) => this.transformData(country)))
      .catch((error) => error);
  };

  getCountryByAlphaCode = async (alphaCode) => {
    return await fetch(this._apiUrl + `alpha/${alphaCode}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return [data].map((country) => {
          const bordersObj = {
            borders: country["borders"].map((item) =>
              indexedAlphaCode[item] ? indexedAlphaCode[item].name : item
            ),
          };
          return Object.assign(this.transformData(country), bordersObj);
        });
      })
      .catch((error) => error);
  };
}
