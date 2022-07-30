import React from "react";
import CountriesList from "../countries-list/countries-list";
import Container from "../container/container";
import SearchAndFilterPanel from "../search-and-filter-panel/search-and-filter-panel";
import Loader from "../loader/loader";
import { useGetAllCountriesQuery } from "../../store/countriesApi";
import { ErrorItem } from "../error-item/error-item";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../store/slices/countriesSlice";
import "./countries.scss";

const Countries = () => {
  const { currentData = [], error, isLoading } = useGetAllCountriesQuery();
  const { items = [] } = useSelector((state) => state.countries);

  const [filtredItems, setFiltredItems] = React.useState(items);
  const dispatch = useDispatch();

  const onFilteredItems = (value = "") => {
    setFiltredItems(
      items.filter((item) =>
        item.name.common.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  React.useEffect(() => {
    if (currentData.length) {
      dispatch(setData(currentData));
    }
  }, [currentData]);

  React.useEffect(() => {
    if (items.length) {
      onFilteredItems();
    }
  }, [items]);

  if (error) {
    return <ErrorItem />;
  }
  return (
    <section className="countries">
      <Container>
        {isLoading && <Loader />}
        {items && !isLoading && (
          <>
            <SearchAndFilterPanel onFilteredItems={onFilteredItems} />
            <CountriesList items={filtredItems} />
          </>
        )}
      </Container>
    </section>
  );
};

export default Countries;
