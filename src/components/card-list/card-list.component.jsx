import React from "react";
import "./card-list.styles.css";
import { Card } from "../card/card.component.jsx";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.propName.monsters.map((m) => (
        <Card key={m.id} monster={m} />
      ))}
    </div>
  );
};
