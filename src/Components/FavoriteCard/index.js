import React, { Fragment } from "react";
import "./FavoriteCard.scss";

const FavoritePalette = ({ colors, name }) => {
  return (
    <section className="palettes-wrapper">
      <section className="favorite-palette-wrapper">
        <div
          className="color-window-favorite"
          style={{ backgroundColor: colors[0] }}
        ></div>
        <div
          className="color-window-favorite"
          style={{ backgroundColor: colors[1] }}
        ></div>
        <div
          className="color-window-favorite"
          style={{ backgroundColor: colors[2] }}
        ></div>
        <div
          className="color-window-favorite"
          style={{ backgroundColor: colors[3] }}
        ></div>
        <div
          className="color-window-favorite"
          style={{ backgroundColor: colors[4] }}
        ></div>
      </section>
      <section className="palette-name">
        <h5>{name}</h5>
      </section>
    </section>
  );
};

export default FavoritePalette;
