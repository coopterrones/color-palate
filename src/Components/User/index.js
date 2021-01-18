import React from "react";
import FavoritePalette from "../FavoriteCard/index.js";
import "./User.scss";

const User = ({ userFavorites }) => {
  const colorCardsFavorites = userFavorites.map((palette) => {
    return <FavoritePalette colors={palette.favHexCodes} name={palette.name} />;
  });
  if (!userFavorites.length) {
    return (
      <section>
        <h4>Please add some palettes to your list.</h4>
      </section>
    );
  } else {
    return (
      <section className="favorite-cards-wrapper">
        {colorCardsFavorites}
      </section>
    );
  }
};

export default User;
