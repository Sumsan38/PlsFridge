import React from "react";
import './BottomNav.css';
import { Link } from "react-router-dom";

function BottomNav () {
  return (
    <nav className="wrapper">
      <div>
        <Link to="/Ingredients/Account_Management">마이페이지</Link>
      </div>
      <div>
        <Link to="/MakingFood/Todays_Recipes">음식만들기</Link>
      </div>
      <div>
        <Link to="/Admin/Admin_Page">관리자페이지</Link>
      </div>
    </nav>
  );
};

export default BottomNav;