import { createContext } from "react";

const { Provider: CountriesApiProvider, Consumer: CountriesApiConsumer } =
  createContext();

export { CountriesApiProvider, CountriesApiConsumer };
