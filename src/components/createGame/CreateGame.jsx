import React, { useState } from "react";
import FormField from "../common/formField/FormField";
import css from "./CreateGame.module.css";

const CreateGame = (props) => {
  const [options, setOptions] = useState([
    {
      value: 0,
      text: "Выберите карту:",
      img: "/assets/map_empty.png",
      disabled: true,
    },
    { value: 1, text: "Река", img: "/assets/map_river.jpg" },
    { value: 2, text: "Черепаха", img: "/assets/map_turtle.jpg" },
    { value: 3, text: "Проход", img: "/assets/map_entrance.png" },
  ]);
  const [selected, setSelected] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={css.form_wrapper}>
      <form className={css.form} onSubmit={handleSubmit}>
        <FormField
          name="name"
          fieldType="input"
          type="text"
          label="Ваше имя"
          gridArea="input"
        />
        {selected !== undefined ? (
          <div className={css.map_image}>
            <img src={process.env.PUBLIC_URL + options[selected].img} alt="" />
          </div>
        ) : (
          ""
        )}
        <FormField
          gridArea="select"
          name="roomMap"
          fieldType="select"
          setSelected={setSelected}
          optionsName="Выберите карту"
          options={options}
        />
        <FormField
          gridArea="button"
          fieldType="button"
          value="Создать комнату"
        />
      </form>
    </div>
  );
};

export default CreateGame;
