import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';
import "./App.css";
import Account_Management from './Ingredients/Account_Management';
import Personal_Fridge from './Ingredients/Personal_Fridge';
import Personal_Cookware from './Ingredients/Personal_Cookware';
import Cooking_Basket from './Ingredients/Cooking_Basket';
import Todays_Recipes from './MakingFood/Todays_Recipes';
import Best_Recipes from './MakingFood/Best_Recipes';
import All_Recipes from './MakingFood/All_Recipes';
import Recipes_Registration from './MakingFood/Recipes_Registration';
import Admin_Page from './Admin/Admin_Page';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/Ingredients/Account_Management" component={Account_Management} />
        <Route path="/Ingredients/Personal_Fridge" component={Personal_Fridge} />
        <Route path="/Ingredients/Personal_Cookware" component={Personal_Cookware} />
        <Route path="/Ingredients/Cooking_Basket" component={Cooking_Basket} />
        <Route path="/MakingFood/Todays_Recipes" component={Todays_Recipes} />
        <Route path="/MakingFood/Best_Recipes" component={Best_Recipes} />
        <Route path="/MakingFood/All_Recipes" component={All_Recipes} />
        <Route path="/MakingFood/Recipes_Registration" component={Recipes_Registration} />
        <Route path="/Admin/Admin_Page" component={Admin_Page} />
      </Switch>
    </div>
  );
}

export default App;