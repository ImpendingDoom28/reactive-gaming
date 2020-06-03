import React, { useState } from "react";
import css from "./FormInput.module.css";

const FormInput = (props) => {
  const [val, setVal] = useState("");
  return (
    <input
      type={props.type}
      name={props.name}
      className={css.input}
      placeholder=" "
      value={val}
      onChange={(e) => setVal(e.target.value)}
    />
  );
};

export default FormInput;
