import React, { useState, useEffect } from "react";
import Loader from "../loader/loader";

const DetailsWrapper = (Component) => {
  const WrappedComponent = ({ getData, countryName }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
      getData(countryName)
        .then((response) => {
          setData(...response);
          setLoading(false);
        })
        .catch((err) => setError(err));
    }, [countryName, getData]);

    if (loading && !error) {
      return <Loader />;
    }

    return <Component getData={getData} data={data} />;
  };
  return WrappedComponent;
};

export default DetailsWrapper;
