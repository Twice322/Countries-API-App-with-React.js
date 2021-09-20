import React from "react";
import { connect } from "react-redux";
import "./moreButton.scss";

const showOrHideButton = (visible, amount) => {
  if (visible >= amount) {
    return "btn__wrapper disabled";
  }
  return "btn__wrapper";
};

const MoreButton = ({ visible, loadMoreCountries, visibleData }) => {
  const selector = showOrHideButton(visible, visibleData.length);
  return (
    <div className={selector}>
      <button className={"btn"} onClick={() => loadMoreCountries(visible)}>
        More
      </button>
    </div>
  );
};
const mapStateToProps = ({ visible }) => {
  return { visible };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadMoreCountries: (visible) => {
      dispatch({
        type: "LOAD_MORE_COUNTRIES",
        payload: visible + 20,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoreButton);
