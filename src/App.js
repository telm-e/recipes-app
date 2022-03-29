import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import UserProvider from './context/UserProvider';
import Foods from './pages/Foods';
import Login from './pages/Login';

// fazer as rotas encapsuladas pelo UserProvider, que disponibiliza o contexto,
// o contexto contém os valores (states, handlers) que, por sua vez são disponibilizados para children.
function App() {
  return (
    <UserProvider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/foods" component={ Foods } />
      </Switch>
    </UserProvider>
  );
}

export default App;
