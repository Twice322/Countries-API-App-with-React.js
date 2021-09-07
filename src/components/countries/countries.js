import React, { useState } from "react";
import CountriesList from "../countries-list/countries-list";
import Container from "../container/container";
import SearchAndFilterPanel from "../search-and-filter-panel/search-and-filter-panel";
import { searchCountry } from "../help-functions/help-functions";
import ErrorContainer from "../error-container/error-container";
import "./countries.scss";
const Countries = () => {
  const [term, setTerm] = useState("");
  const [data, setData] = useState({});
  const visibleData = searchCountry(term, data);
  return (
    <ErrorContainer>
      <section className="countries">
        <Container>
          <SearchAndFilterPanel
            setData={setData}
            term={term}
            setTerm={setTerm}
          />
          <CountriesList data={visibleData} setData={setData} />
        </Container>
      </section>
    </ErrorContainer>
  );
};
export default Countries;
