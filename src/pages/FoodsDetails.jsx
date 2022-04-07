import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Proptypes from 'prop-types';
import StartButton from '../components/StartButton';
import ButtonShare from '../components/ButtonShare';
import ButtonFavorite from '../components/ButtonFavorite';

function FoodsDetails(props) {
  const [getMeals, setGetMeals] = useState([]);
  const [getDrinks, setGetDrinks] = useState([]);

  const { match: { params: { id } } } = props;
  const history = useHistory();

  // Verifica se a requisição para a API de comidas foi realizada
  useEffect(() => {
    const getApiMeal = async () => {
      const { meals } = await (await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)).json();
      setGetMeals(meals);
    };
    const getApiDrink = async () => {
      const { drinks } = await (await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')).json();
      setGetDrinks(drinks);
    };
    getApiMeal();
    getApiDrink();
  }, [id]);

  if (getMeals.length === 0 || getDrinks.length === 0) return <h1>Loading...</h1>;

  const {
    strMeal,
    strCategory,
    strInstructions,
    strMealThumb,
    strYoutube,
    strArea,
  } = getMeals[0];
  // Retorna um array do objeto
  const allIngredients = Object.entries(getMeals[0])
    .filter((item) => item[0].includes('strIngredient'));
  const ingredients = allIngredients
    .filter((item) => item[1] ?? item[1])
    .map((item) => item[1]);
  const allMeasures = Object.entries(getMeals[0])
    .filter((item) => item[0].includes('strMeasure'));
  const measures = allMeasures
    .filter((item) => ((item[1]) && item[1] !== ' ' ? item[1] : false))
    .map((item) => item[1]);

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
          src={ strMealThumb }
          alt={ strMeal }
        />
      </div>
      <div>
        <div>
          <h1 data-testid="recipe-title">{ strMeal }</h1>
          <ButtonShare path={ history.location.pathname } />
          <ButtonFavorite
            id={ id }
            testid="favorite-btn"
            favoriteRecipe={ {
              id,
              type: 'food',
              nationality: strArea,
              category: strCategory,
              alcoholicOrNot: '',
              name: strMeal,
              image: strMealThumb,
            } }
          />
        </div>
        <h3 data-testid="recipe-category" style={ { color: 'gray' } }>{ strCategory }</h3>
        <div>
          <h3>Ingredients</h3>
          <div>
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
            data-testid="instructions"
          >
            { strInstructions }
          </p>
        </div>
        <div>
          <h3>Video</h3>
          <iframe
            data-testid="video"
            url={ strYoutube }
            title={ strMeal }
            width="300px"
            height="200px"
            src={ strYoutube }
          />
        </div>
        <h3>
          Recommended
        </h3>
        <p data-testid="0-recomendation-card"> </p>

        <Link
          style={ style }
          className="start-button"
          to={ `/foods/${id}/in-progress` }
          data-testid="start-recipe-btn"
        >
          <StartButton id={ id } page="meals" />
        </Link>
      </div>
    </section>
  );
}

FoodsDetails.propTypes = {
  path: Proptypes.string,
  props: Proptypes.string,
}.isRequired;

export default FoodsDetails;
