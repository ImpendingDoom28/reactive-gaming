import React from "react";
import FormInput from "./formInput/FormInput";
import css from "./FormField.module.css";
import FormSelect from "./formSelect/FormSelect";
import FormButton from "./formButton/FormButton";

const FormField = (props) => {
  const getCorrectField = (fieldType) => {
    switch (fieldType) {
      case "select": {
        return (
          <>
            <FormSelect
              name={props.name}
              optionsName={props.optionsName}
              options={props.options}
              setSelected={props.setSelected}
            />
          </>
        );
      }
      case "input": {
        return (
          <>
            <FormInput name={props.name} type={props.type} />
          </>
        );
      }
      case "button": {
        return (
          <>
            <FormButton value={props.value} />
          </>
        );
      }
    }
  };

  return (
    <div className={css.field} style={{ gridArea: props.gridArea }}>
      {getCorrectField(props.fieldType)}
      {props.label && (
        <label className={css.label} htmlFor={props.name}>
          {props.label}
        </label>
      )}
    </div>
  );
};

export default FormField;
