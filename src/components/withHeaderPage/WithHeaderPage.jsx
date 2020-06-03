import React from "react";
import logo from "../../assets/siggil-logo.jpg";
import css from "./WithHeaderPage.module.css";
import Header from "../common/header/Header";

const WithHeaderPage = (props) => {
  return (
    <>
      <img src={logo} className={css.img} alt="" />
      <div className={css.title_wrapper}>
        <p className={css.title}>
          Добро пожаловать в онлайн версию игры СиГГиЛ!
        </p>
      </div>

      <Header />
      {props.children}
    </>
  );
};

export default WithHeaderPage;
