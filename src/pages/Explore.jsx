import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Header from '../components/Header';
import Button from '../components/Button';

const Explore = () => {
  const history = useHistory();

  return (

    <>
      <Header title="Explore" search={ false } profile />
      <Button
        data-testid="explore-foods"
        type="button"
        value="Explore Foods"
        onClick={ () => {
          history.push('/explore/foods');
        } }
      />
      <Button
        data-testid="explore-drinks"
        value="Explore Drinks"
        type="button"
        onClick={ () => {
          history.push('/explore/drinks');
        } }
      />
      {/* <Footer />  quando pronto vai aqui */}
    </>
  );
};

export default Explore;
