import React from "react";
import "./moreButton.scss";

const showOrHideButton = (visible, amount) => {
  if (visible >= amount) {
    return "btn__wrapper disabled";
  }
  return "btn__wrapper";
};

export const MoreButton = ({ visible, setVisible, amount }) => {
  const selector = showOrHideButton(visible, amount);
  return (
    <div className={selector}>
      <button className={"btn"} onClick={() => setVisible(visible + 20)}>
        More
      </button>
    </div>
  );
};
