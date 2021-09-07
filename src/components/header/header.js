import React from "react";
import "./header.scss";
import { BiMoon } from "react-icons/bi";
import Container from "../container/container";
import { NavLink } from "react-router-dom";
const onChangeTheme = () => {
  document.body.classList.toggle("dark__theme");
};

const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="header__inner">
          <NavLink to={"/"}>
            <h1 className="header__title">Where in the world?</h1>
          </NavLink>
          <div className="header__mode" onClick={onChangeTheme}>
            <BiMoon className="theme__icon" />
            <span className="theme__text">Dark Mode</span>
          </div>
        </div>
      </Container>
    </header>
  );
};
export default Header;
