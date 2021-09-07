import React, { useState, useEffect } from "react";
import Loader from "../loader/loader";

const DataWrapper = (Component) => {
  const WrappedComponent = (props) => {
    const { setData, getData } = props;
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
      getData()
        .then((response) => {
          setData(response);
          setLoading(false);
        })
        .catch((err) => setError(err));
    }, [setData, getData]);

    if (loading && !error) {
      return <Loader />;
    }
    return <Component {...props} />;
  };
  return WrappedComponent;
};

export default DataWrapper;
