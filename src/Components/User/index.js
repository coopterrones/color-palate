import React from "react";

const User = ({ userFavorites }) => {
  if (!userFavorites.length) {
    return (
      <section>
        <h4>Please add some palettes to your list.</h4>
      </section>
    );
  } else {
    return (
      <section>
        <p>hi</p>
      </section>
    );
  }
};

export default User;
