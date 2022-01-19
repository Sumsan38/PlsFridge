import { Routes ,Route } from "react-router-dom";
import "./App.css";
import Account_Management from './SH.Ingredients/Account_Management';
import Todays_Recipes from './SH. MakingFood/Todays_Recipes';
import Admin_Page from './SH.Admin/Admin_Page';
import customAxios from './customAxios';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact={true} path="/Account_Management" element={<Account_Management />} />
        <Route exact={true} path="/Todays_Recipes" element={<Todays_Recipes />} />
        <Route exact={true} path="/Admin_Page" element={<Admin_Page />} />
      </Routes>
    </div>
  );
}

export default App;