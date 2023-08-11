import React from "react";
import s from "../styles/weather.module.css";
const Weather = () => {
  return (
    <div>
      <div className={s.card}>
        <div className={s.container}>
          <div className={`${s.cloud} ${s.front}`}>
            <span className={s.left_front}></span>
            <span className={s.right_front}></span>
          </div>
          <span className={`${s.sun} ${s.sunshine}`}></span>
          <span className={s.sun}></span>
          <div className={`${s.cloud} ${s.back}`}>
            <span className={s.left_back}></span>
            <span className={s.right_back}></span>
          </div>
        </div>

        <div className={s.card_header}>
          <span>
            Messadine, Susah <br />
            Tunisia
          </span>
          <span>March 13</span>
        </div>

        <span className={s.temp}>23°</span>

        <div className={s.temp_scale}>
          <span>Celcius</span>
        </div>
      </div>
    </div>
  );
};

export default Weather;
