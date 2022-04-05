import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getRandomDrink } from '../services/APIcalls/getRandom';

const ExploreDrinks = () => {
  const history = useHistory();

  // redirecionar para a tela de detalhes de uma bebida aleatória
  const handleSurpriseMeClick = async () => {
    const { idDrink } = await getRandomDrink();
    history.push(`/drinks/${idDrink}`);
  };

  return (
    <>
      <Header title="Explore Drinks" search={ false } profile />
      <Button
        data-testid="explore-by-ingredient"
        type="button"
        value="By Ingredient"
        // Redirecionar para a tela de explorar por ingredientes
        onClick={ () => { history.push('/explore/drinks/ingredients'); } }
      />
      <Button
        data-testid="explore-surprise"
        type="button"
        value="Surprise me!"
        onClick={ handleSurpriseMeClick }
      />
      <Footer />
    </>
  );
};

export default ExploreDrinks;
