import React from "./node_modules/react";
import Card from "./card/Card";
import css from "./Cards.module.css";

const Cards = (props) => {
  const cardsInfo = [
    {
      id: 1,
      number: 1,
      sign: 22,
      isUpsideDown: false,
    },
    {
      id: 2,
      number: 2,
      sign: 3,
      isUpsideDown: false,
    },
    {
      id: 3,
      number: 3,
      sign: 6,
      isUpsideDown: true,
    },
    {
      id: 4,
      number: 4,
      sign: 2,
      isUpsideDown: false,
    },
  ];

  return (
    <div className={css.cards}>
      {cardsInfo.map((elem, index) => {
        return (
          <Card
            key={elem.id}
            id={elem.id}
            number={elem.number}
            sign={elem.sign}
            isUpsideDown={elem.isUpsideDown}
          />
        );
      })}
    </div>
  );
};

export default Cards;
