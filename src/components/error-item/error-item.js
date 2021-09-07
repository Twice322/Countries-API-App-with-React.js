import React from "react";
import "./error-item.scss";

export const ErrorItem = () => {
  return (
    <div className="error">
      <div className="error__container">
        <div className="error__text__container">
          <i class="fas fa-exclamation-triangle"></i>
          <span className="error__text">Something went wrong...</span>
        </div>
      </div>
    </div>
  );
};
