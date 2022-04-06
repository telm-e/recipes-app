import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Proptypes from 'prop-types';
import StartButton from '../components/StartButton';
import ButtonShare from '../components/ButtonShare';
import ButtonFavorite from '../components/ButtonFavorite';

function DrinksDetails(props) {
  const [getDrinks, setDrinks] = useState();
  const [getMeals, setGetMeals] = useState();

  const { match: { params: { id } } } = props;
  const history = useHistory();

  useEffect(() => {
    const getApiDrink = async () => {
      const { drinks } = await (
        await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)).json();
      setDrinks(drinks);
    };

    const getApiMeal = async () => {
      const { meals } = await (await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')).json();
      setGetMeals(meals);
    };

    getApiDrink();
    getApiMeal();
  }, [id]);

  if (!getDrinks || !getMeals) return <h1>Loading...</h1>;

  const {
    strDrink,
    strAlcoholic,
    strInstructions,
    strDrinkThumb,
  } = getDrinks[0];

  const allIngredients = Object.entries(getDrinks[0])
    .filter((item) => item[0].includes('strIngredient'));

  const ingredients = allIngredients
    .filter((item) => item[1] ?? item[1])
    .map((item) => item[1]);

  const allMeasures = Object.entries(getDrinks[0])
    .filter((item) => item[0].includes('strMeasure'));

  const measures = allMeasures
    .filter((item) => ((item[1]) && item[1] !== ' ' ? item[1] : false))
    .map((item) => item[1]);

  const recipe = {
    id,
    type: 'drink',
    nationality: '',
    category: 'Cocktail',
    alcoholicOrNot: strAlcoholic,
    name: strDrink,
    image: strDrinkThumb,
  };
  // Desenvolva um botão de nome "Start Recipe" que deve ficar fixo na parte de baixo da tela o tempo todo
  const style = {
    position: 'fixed',
    bottom: '0',
  };

  return (
    <section>
      <div>
        <img
          data-testid="recipe-photo"
          src={ strDrinkThumb }
          alt={ strDrink }
        />
      </div>

      <div>
        <div>
          <h1 data-testid="recipe-title">{ strDrink }</h1>
          <ButtonShare path={ history.location.pathname } />
          <ButtonFavorite recipe={ recipe } />
        </div>

        <h3 data-testid="recipe-category" style={ { color: 'gray' } }>
          { strAlcoholic }
        </h3>

        <div>
          <h3>Ingredients</h3>
          <div
            style={ { backgroundColor: '#DCDCDC',
              borderRadius: '4px',
              padding: '1% 2%' } }
          >
            {
              ingredients.map((item, index) => (
                <li
                  key={ index }
                  data-testid={ `${index}-ingredient-name-and-measure` }
                  style={ { listStyle: 'none' } }
                >
                  { `- ${item} - ${measures[index]}` }
                </li>))
            }
          </div>
        </div>

        <div>
          <h3>Instructions</h3>
          <p
            style={ { backgroundColor: '#DCDCDC',
              borderRadius: '4px',
              padding: '1% 2%' } }
            data-testid="instructions"
          >
            { strInstructions }
          </p>
        </div>

        <h3>
          Recommended
        </h3>
        <p data-testid="0-recomendation-card"> </p>

        <Link
          style={ style }
          className="start-button"
          to={ `/drinks/${id}/in-progress` }
          data-testid="start-recipe-btn"
        >
          <StartButton id={ id } page="cocktails" />
        </Link>
      </div>

    </section>
  );
}

DrinksDetails.propTypes = {
  path: Proptypes.string,
  props: Proptypes.string,
}.isRequired;

export default DrinksDetails;
