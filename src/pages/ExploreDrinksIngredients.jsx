import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import getDrinksIngredientsList from '../services/APIcalls/getDrinksIngredientsList';
import IngredientCard from '../components/CardIngredients';

const ExploreDrinksIngredients = () => {
  const [drinksIngredientsList, setDrinksIngredientsList] = useState([]);
  // const history = useHistory();

  // Chamar o fetch getDrinksIngredientsList() e setDrinksIngredientsList,
  // as componentDidMount, array sem dependências.
  useEffect(() => {
    (async () => {
      const allIngredientsList = await getDrinksIngredientsList();
      const NUM = 12;
      const ingredientList = allIngredientsList.slice(0, NUM);
      setDrinksIngredientsList(ingredientList);
    })();
  }, []);

  return (
    <>
      <div>
        <Header title="Explore Ingredients" search={ false } profile />
      </div>
      {
        drinksIngredientsList.map((ing) => {
          console.log(ing);
          return (
            // <Link to={ } key={ ing }>
            <IngredientCard
              key={ ing }
              name={ ing }
              src={ `https://www.thecocktaildb.com/images/ingredients/${ing}-Small.png` }
            />
            // </Link>
          );
        })
      }
    </>
  );
};

export default ExploreDrinksIngredients;
