import React, { useState } from 'react';
import unselected from '../images/whiteHeartIcon.svg';
import selected from '../images/blackHeartIcon.svg';

export default function FavoriteButton() {
  const [favorite, setFavorite] = useState(false);

  return (
    <div>
      <button
        data-testid="favorite-btn"
        onClick={ () => setFavorite(!favorite) }
        type="button"
        src={ !favorite ? unselected : selected }
      >
        { !favorite ? <img src={ unselected } alt="white heart icon" />
          : <img src={ selected } alt="black heart icon" />}

      </button>

    </div>
  );
}
