import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import { getRandomMeal } from '../services/APIcalls/getRandom';

function ExploreFoods() {
  const history = useHistory();

  const handleClick = async () => {
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
        onClick={ () => {
          history.push('/explore/foods/ingredients');
        } }
      />
      <Button
        data-testid="explore-by-nationality"
        type="button"
        value="By Nationality"
        onClick={ () => { history.push('/explore/foods/nationalities'); } }
      />
      <Button
        data-testid="explore-surprise"
        type="button"
        value="Surprise me!"
        onClick={ handleClick }
      />
      {/* <Footer /> */}
    </>
  );
}

export default ExploreFoods;
