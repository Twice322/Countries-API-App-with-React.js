import React from "react";
import Container from "../container/container";
import "./country-details.scss";
import Loader from "../loader/loader";
import { useGetCountryByNameQuery } from "../../store/countriesApi";
import { useParams } from "react-router-dom";

const REGEXP = /(\d)(?=(\d\d\d)+([^\d]|$))/g;

const CountryDetails = () => {
  const { name } = useParams();
  const { data, isLoading } = useGetCountryByNameQuery(name);
  if (isLoading) {
    return <Loader />;
  }
  const [_, currency] = Object.entries(data.currencies).flat();
  console.log(data);
  return (
    <div className="country">
      <Container>
        <div className="back__btn__wrapper">
          <button className="back__btn" onClick={() => window.history.back()}>
            <i className="fas fa-long-arrow-alt-left"></i>
            <span className="back__btn__text">Back</span>
          </button>
        </div>
        <div className="country__details">
          <img
            src={data.flags.png}
            className="country__flag"
            alt={"country flag"}
          />
          <div className="country__info">
            <h1 className="country__title">{name}</h1>
            <ul className="country__info__list">
              <li className="country__info__list__item">
                <h5 className="country__info__list__item__title">
                  Native name:
                </h5>
                <span>{data.name.official}</span>
              </li>
              <li className="country__info__list__item">
                <h5 className="country__info__list__item__title">
                  Population:
                </h5>
                <span>{data.population}</span>
              </li>
              <li className="country__info__list__item">
                <h5 className="country__info__list__item__title">Region:</h5>
                <span>{data.region}</span>
              </li>
              <li className="country__info__list__item">
                <h5 className="country__info__list__item__title">
                  Sub Region:
                </h5>
                <span>{data.name.official}</span>
              </li>
              <li className="country__info__list__item">
                <h5 className="country__info__list__item__title">Capital:</h5>
                <span>{data.name.official}</span>
              </li>
              <li className="country__info__list__item">
                <h5 className="country__info__list__item__title">
                  Currencies:
                </h5>
                <span>
                  {currency.name} ({currency.symbol})
                </span>
              </li>
              <li className="country__info__list__item">
                <h5 className="country__info__list__item__title">Languages:</h5>
                <span>{data.name.official}</span>
              </li>
            </ul>
            <div className="country__info__list__item borders">
              <h5 className="country__info__list__item__title">
                Bordered countries:
              </h5>
              <ul className="borders__list">
                {data.borders &&
                  data.borders.slice(0,5).map((item, index) => (
                    <li className="borders__list__item" key={index}>
                      {item}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CountryDetails;
