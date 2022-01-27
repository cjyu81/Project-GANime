import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <div className="cards__item__link">
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              className="cards__item__img"
              alt="Travel Image"
              src={props.src}
            />
          </figure>
          <div className="cards__item__info">
            <h1>{props.title}</h1>
            <p className="cards__item__text" style={{whiteSpace: 'pre-wrap'}}>{props.text}</p>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
