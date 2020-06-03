import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={css.header}>
      <div>
        <NavLink to="/join">Присоединиться</NavLink>
      </div>
      <div>
        <NavLink to="/create">Создать игру</NavLink>
      </div>
      <div>
        <NavLink to="/rules">Правила</NavLink>
      </div>
    </div>
  );
};

export default Header;
