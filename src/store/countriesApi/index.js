import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const countriesApi = createApi({
  reducerPath: "countriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3.1/" }),
  endpoints: (builder) => ({
    getAllCountries: builder.query({
      query: () => `all`,
    }),
    getCountryByName: builder.query({
      query: (name) => `name/${name}`,
      transformResponse: ([data]) => data,
    }),
    getCountryByRegion: builder.query({
      query: (region) => `region/${region}`,
    }),
  }),
});

export const {
  useGetAllCountriesQuery,
  useGetCountryByNameQuery,
  useGetCountryByRegionQuery,
} = countriesApi;
