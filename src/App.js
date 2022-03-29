import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import UserProvider from './context/UserProvider';
import RecepiesProvider from './context/RecepiesProvider';
import Login from './pages/Login';
import Foods from './pages/Foods';
import Drinks from './pages/Drinks';
import Details from './pages/Details';
import Explore from './pages/Explore';
import Ingredients from './pages/Ingredients';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import InProgress from './pages/InProgress';
import Nationalities from './pages/Nationalities';

// fazer as rotas encapsuladas pelo UserProvider, que disponibiliza o contexto,
// o contexto contém os valores (states, handlers) que, por sua vez são disponibilizados para children.
function App() {
  return (
    <UserProvider>
      <RecepiesProvider>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="/foods" component={ Foods } />
          <Route path="/drinks" component={ Drinks } />
          <Route path="/foods/:id" component={ Details } />
          <Route path="/drinks/:id" component={ Details } />
          <Route path="/foods/:id/in-progress" component={ InProgress } />
          <Route path="/drinks/:id/in-progress" component={ InProgress } />
          <Route path="/explore" component={ Explore } />
          <Route path="/explore/foods" component={ Explore } />
          <Route path="/explore/drinks" component={ Explore } />
          <Route path="/explore/foods/ingredients" component={ Ingredients } />
          <Route path="/explore/drinks/ingredients" component={ Ingredients } />
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
