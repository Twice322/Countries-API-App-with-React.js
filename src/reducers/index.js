const initialState = {
  countriesList: [],
  countryDetails: {},
  visible: 20,
  loading: true,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "COUNTRIES_LOADED":
      return {
        ...state,
        loading: false,
        countriesList: action.payload,
      };
    case "LOAD_MORE_COUNTRIES":
      return {
        ...state,
        visible: action.payload,
      };
    case "LOAD_COUNTRIES_BY_REGION":
      return {
        ...state,
        loading: false,
        countriesList: action.payload,
      };
    case "LOAD_COUNTRY_DETAILS":
      return {
        ...state,
        loading: false,
        countryDetails: action.payload,
      };
    case "ERROR_HAPPENED":
      return {
        ...state,
        error: true,
      };
    case "COUNTRIES_REQUESTED":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default reducer;
