import React from "react";
import css from "./FormButton.module.css";

const FormButton = (props) => {
  return (
    <div className={css.button}>
      <input
        type="submit"
        value={props.value}
        onClick={(e) => {
          let button = e.target;
          button.classList.add(css.animation);
          setTimeout(
            () => {
              button.classList.remove(css.animation);
            },
            1000,
            button
          );
        }}
      />
    </div>
  );
};

export default FormButton;
