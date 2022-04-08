import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import FinishButton from '../components/FinishButton';
import ButtonShare from '../components/ButtonShare';
import ButtonFavorite from '../components/ButtonFavorite';

function InProgressFoods(props) {
  const [getMeals, setGetMeals] = useState([]);
  const [getDrinks, setGetDrinks] = useState([]);
  const [checkList, setCheckList] = useState([]);

  const { match: { params: { id } } } = props;

  // Verifica se a requisição para a API de comidas foi realizada
  useEffect(() => {
    const checked = JSON.parse(localStorage.getItem('ingredients'));
    if (checked !== null) {
      setCheckList(checked);
    }

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

  // Desenvolva um botão de nome "Finish Recipe" que deve ficar fixo na parte de baixo da tela o tempo todo
  const style = {
    position: 'fixed',
    bottom: '0',
  };

  function onChange({ target }) {
    const initialList = [];
    if (checkList.length === 0) {
      ingredients.forEach((each, i) => {
        console.log(each);
        initialList[i] = false;
      });
      initialList[target.id] = true;
      setCheckList(initialList);
      localStorage.setItem('ingredients', JSON.stringify(initialList));
    } else {
      const list = checkList;
      list[target.id] = !list[target.id];
      setCheckList(list);
      console.log(list);
      localStorage.setItem('ingredients', JSON.stringify(list));
    }
  }

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
          <ButtonShare path={ `/foods/${id}` } />
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
                  data-testid={ `${index}-ingredient-step` }
                  style={ { listStyle: 'none' } }
                >
                  <input
                    id={ index }
                    type="checkbox"
                    checked={ checkList[index] }
                    onChange={ onChange }
                  />
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

        <Link
          style={ style }
          className="finish-button"
          to="/done-recipes"
          data-testid="finish-recipe-btn"
        >
          <FinishButton id={ id } page="meals" />
        </Link>
      </div>
    </section>
  );
}

InProgressFoods.propTypes = {
  path: Proptypes.string,
  props: Proptypes.string,
}.isRequired;

export default InProgressFoods;
