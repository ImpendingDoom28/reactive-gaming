import React from "react";
import css from "./Rules.module.css";

const Rules = (props) => {
  return (
    <>
      <div className={css.rules}>
        <div className={css.rule}>
          <div className={css.rule_title}>
            <h3>Собирай</h3>
          </div>
          <div className={css.rule_body}>
            <p>
              СиГГил - карточная игра, основанная на сборе карт. У каждой карты
              есть цифра и знак, к которому она принадлежит. Игроки выбирают
              карты по очереди из доступных. Карта называется доступной, если на
              ней не лежат другие карты. Некоторые из карт не похожи на
              остальные - такие карты называются духами. Отложите их в сторону,
              как только они станут доступны.
            </p>
          </div>
        </div>
        <div className={css.rule}>
          <div className={css.rule_title}>
            <h3>Плени</h3>
          </div>
          <div className={css.rule_body}>
            <p>
              Для победы нужно пленить тех самых духов. Духов можно пленить
              тремя способами:
              <ul>
                <li>
                  Собрать 3 или более карт, у которых цифра или знак совпадают с
                  цифрой или знаком духа
                </li>
                <li>
                  Отобрать у другого игрока, набрав больше карт, чем у него на
                  духе
                </li>
                <li>Усилить своего духа добавив карт</li>
              </ul>
            </p>
          </div>
        </div>
        <div className={css.rule}>
          <div className={css.rule_title}>
            <h3>Побеждай</h3>
          </div>
          <div className={css.rule_body}>
            <p>
              Условия очень просты: Собери 5 духов в игре на двоих, 4 духа при
              игре втроем, 3 — вчетвером или игра заканчивается, когда
              какой-либо игрок взял последнюю карту. Во втором случае побеждает
              тот, кто пленил больше всего духов. Если у некоторых игроков
              одинаковое количество духов, то побеждает тот, у кого меньше всего
              карт.
            </p>
          </div>
        </div>
      </div>
      <svg>
        <filter id="wavy">
          <feTurbulence
            x="0"
            y="0"
            baseFrequency="0.02"
            numOctaves="5"
            seed="2"
          >
            <animate
              attributeName="baseFrequency"
              dur="60s"
              repeatCount="indefinite"
              values="0.02; 0.05; 0.02"
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="30" />
        </filter>
      </svg>
    </>
  );
};

export default Rules;
