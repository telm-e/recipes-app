import React from 'react';
import PropTypes from 'prop-types';

function FoodsDetails(props) {
  const { match: { params: { id } } } = props;
  // Desenvolva um botão de nome "Start Recipe" que deve ficar fixo na parte de baixo da tela o tempo todo
  const style = {
    position: 'fixed',
    bottom: '0',
  };
  return (
    <div>

      <h1
        data-testid="recipe-title"
      >
        Foods Details
      </h1>
      <img
        src="recipePhoto"
        alt="recipefoods"
        data-testid="recipe-photo"
      />
      <section>
        <h2>Category</h2>
        <p data-testid="recipe-category">category</p>
        <h2>Ingredients</h2>
        <ul data-testid="0-ingredient-name-and-measure">
          <li>Ingredients</li>
        </ul>
        <h2>Instructions</h2>
        <p data-testid="instructions">instructions</p>
      </section>
      <section>
        <img
          data-testid="video"
          src="videos"
          alt="Video"
        />
      </section>
      <section>
        <h2>Recommended Recipes</h2>
        <p data-testid="0-recomendation-card"> </p>
      </section>
      <button type="button" data-testid="share-btn">Share</button>
      <label htmlFor="favorite-btn">
        <input type="checkbox" data-testid="favorite-btn" id="favorite-btn" />
        Favorite
      </label>
      <button
        style={ style }
        type="button"
        data-testid="start-recipe-btn"
      >
        Start Recipe
      </button>
      { id }
    </div>

  );
}

FoodsDetails.propTypes = {
  id: PropTypes.string,
  props: PropTypes.string,
}.isRequired;

export default FoodsDetails;
