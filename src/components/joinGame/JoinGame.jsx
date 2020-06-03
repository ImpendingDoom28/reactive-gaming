import React from "react";
import css from "./JoinGame.module.css";
import FormField from "../common/formField/FormField";

const JoinGame = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      "Privet, zemlyani! Yesli vi ponimaete etot yazik, to mi poladim."
    );
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <FormField fieldType="input" name="name" type="text" label="Ваше имя" />
        <FormField
          fieldType="input"
          name="roomNumber"
          type="text"
          label="Код комнаты"
        />
        <FormField fieldType="button" value="Присоединиться" />
      </form>
    </>
  );
};

export default JoinGame;
