import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';
import "./App.css";
import Account_Management from './Ingredients/Account_Management';
import Todays_Recipes from './MakingFood/Todays_Recipes';
import Admin_Page from './Admin/Admin_Page';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/Ingredients/Account_Management" component={Account_Management} />
        <Route path="/MakingFood/Todays_Recipes" component={Todays_Recipes} />
        <Route path="/Admin/Admin_Page" component={Admin_Page} />
      </Switch>
    </div>
  );
}

export default App;