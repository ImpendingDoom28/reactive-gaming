import React from "./node_modules/react";
import css from "./Card.module.css";

const Card = (props) => {
  const onClick = (id) => {
    alert(id);
  };

  return (
    <>
      {props.isUpsideDown ? (
        <div className={[css.card, css.card_upside_down].join(" ")}></div>
      ) : (
        <div className={css.card} onClick={() => onClick(props.id)}>
          <a className={css.card_left_top}>{props.number}</a>
          <a className={css.card_left_under_top}>{props.sign}</a>
          <a className={css.card_left_bottom}>{props.number}</a>
          <a className={css.card_left_bottom_above}>{props.sign}</a>
          <a className={css.card_right_top}>{props.number}</a>
          <a className={css.card_right_under_top}>{props.sign}</a>
          <a className={css.card_right_bottom}>{props.number}</a>
          <a className={css.card_right_bottom_above}>{props.sign}</a>
        </div>
      )}
    </>
  );
};

export default Card;
