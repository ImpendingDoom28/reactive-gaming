import React from "react";
import css from "./FormSelect.module.css";

const FormSelect = (props) => {
  return (
    <>
      <select
        name={props.name}
        className={css.input}
        onChange={(e) => props.setSelected(e.target.value)}
      >
        {props.options.map((elem, index) => {
          return (
            <option
              key={index}
              value={elem.value}
              disabled={elem.disabled}
              selected={index === 0 ? true : false}
            >
              {elem.text}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default FormSelect;
