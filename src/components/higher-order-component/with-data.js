// import React, { useState, useEffect } from "react";
// import Loader from "../loader/loader";
// import { connect } from "react-redux";
// import { WithApiService } from ".";
// const DataWrapper = (Component) => {
//   // useEffect(() => {
//   //   const { getData, countriesLoaded } = props;

//   //   getData().then((res) => countriesLoaded(res));
//   // }, []);
//   // return <h1>123</h1>;
//   const WrappedComponent = (props) => {
//     const { getData, countriesLoaded } = props;
//     // const [loading, setLoading] = useState(true);
//     // const [error, setError] = useState(false);
//     useEffect(() => {
//       getData().then((response) => {
//         countriesLoaded(response);
//         // setLoading(false);
//       });
//       // .catch((err) => setError(err));
//     }, [getData]);
//     // console.log(props);
//     // if (loading && !error) {
//     //   return <Loader />;
//     // }
//     return <Component {...props} />;
//   };
//   return WrappedComponent;
// };
// const mapStateToProps = ({ countriesList }) => {
//   return { countriesList };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     countriesLoaded: (newCountries) => {
//       dispatch({
//         type: "COUNTRIES_LOADED",
//         payload: newCountries,
//       });
//     },
//   };
// };
// const mapMethodsToProps = (apiService) => {
//   return apiService.getAllCountries;
// };
// // connect(mapStateToProps, mapDispatchToProps)(DataWrapper)
// export default connect(mapStateToProps, mapDispatchToProps)(DataWrapper);
