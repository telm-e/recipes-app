import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import UserProvider from './context/UserProvider';
import RecepiesProvider from './context/RecepiesProvider';
import Login from './pages/Login';
import Foods from './pages/Foods';
import Drinks from './pages/Drinks';
import FoodsDetails from './pages/FoodsDetails';
import DrinksDetails from './pages/DrinksDetails';
import Explore from './pages/Explore';
import ExploreFoods from './pages/ExplorerFoods';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreFoodsIngredients from './pages/ExploreFoodsIngredients';
import ExploreDrinksIngredients from './pages/ExploreDrinksIngredients';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import InProgressFoods from './pages/InProgressFoods';
import Nationalities from './pages/Nationalities';
import InProgressDrinks from './pages/InProgressDrinks';

// fazer as rotas encapsuladas pelo UserProvider, que disponibiliza o contexto,
// o contexto contém os valores (states, handlers) que, por sua vez são disponibilizados para children.
function App() {
  return (
    <UserProvider>
      <RecepiesProvider>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/foods" component={ Foods } />
          <Route exact path="/drinks" component={ Drinks } />
          <Route exact path="/foods/:id" component={ FoodsDetails } />
          <Route exact path="/drinks/:id" component={ DrinksDetails } />
          <Route exact path="/foods/:id/in-progress" component={ InProgressFoods } />
          <Route exact path="/drinks/:id/in-progress" component={ InProgressDrinks } />
          <Route exact path="/explore" component={ Explore } />
          <Route exact path="/explore/foods" component={ ExploreFoods } />
          <Route exact path="/explore/drinks" component={ ExploreDrinks } />
          <Route
            path="/explore/foods/ingredients"
            component={ ExploreFoodsIngredients }
          />
          <Route
            path="/explore/drinks/ingredients"
            component={ ExploreDrinksIngredients }
          />
          <Route path="/explore/foods/nationalities" component={ Nationalities } />
          <Route path="/profile" component={ Profile } />
          <Route path="/done-recipes" component={ DoneRecipes } />
          <Route path="/favorite-recipes" component={ FavoriteRecipes } />
        </Switch>
      </RecepiesProvider>
    </UserProvider>
  );
}

export default App;
