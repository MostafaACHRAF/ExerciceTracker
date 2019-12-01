import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/navbar.component';
import ExercicesList from './components/exercices-list.component';
import EditExercice from './components/edit-exercice.component';
import CreateExercice from './components/create-exercice.component';
import CreateUser from './components/create-user.component';

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <div className="container">
        <Route path="/" exact component={ExercicesList} />
        <Route path="/edit/:id" exact component={EditExercice} />
        <Route path="/create" exact component={CreateExercice} />
        <Route path="/user" exact component={CreateUser}  />
      </div>
    </Router>
  );
}

export default App;
