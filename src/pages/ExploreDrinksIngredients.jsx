import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import getDrinksIngredientsList from '../services/APIcalls/getDrinksIngredientsList';

const ExploreDrinksIngredients = () => {
  const [drinksIngredientsList, setDrinksIngredientsList] = useState([]);

  // Chamar o fetch getDrinksIngredientsList() e setDrinksIngredientsList,
  // as componentDidMount, array sem dependências.
  useEffect(() => {
    (async () => {
      const list = await getDrinksIngredientsList();
      setDrinksIngredientsList(list);
      console.log('effect rodou');
    })();
  }, []);

  return (
    <>
      <div>
        <Header title="Explore Ingredients" search={ false } profile />
      </div>
      {console.log(drinksIngredientsList)}
    </>

  );
};

export default ExploreDrinksIngredients;
