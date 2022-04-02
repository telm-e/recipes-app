import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import { getRandomMeal } from '../services/APIcalls/getRandom';

function ExploreFoods() {
  const history = useHistory();

  // redirecionar para a tela de detalhes de uma comida aleatória so clicar
  const handleSurpriseMeClick = async () => {
    const { idMeal } = await getRandomMeal();
    history.push(`/foods/${idMeal}`);
  };

  return (
    <>
      <Header title="Explore Foods" search={ false } profile />
      <Button
        data-testid="explore-by-ingredient"
        type="button"
        value="By Ingredient"
        // Redirecionar para a tela de explorar por ingredientes
        onClick={ () => { history.push('/explore/foods/ingredients'); } }
      />
      <Button
        data-testid="explore-by-nationality"
        type="button"
        value="By Nationality"
        // Redirecionar para a tela de explorar por nacionalidades
        onClick={ () => { history.push('/explore/foods/nationalities'); } }
      />
      <Button
        data-testid="explore-surprise"
        type="button"
        value="Surprise me!"
        onClick={ handleSurpriseMeClick }
      />
      {/* <Footer /> */}
    </>
  );
}

export default ExploreFoods;
