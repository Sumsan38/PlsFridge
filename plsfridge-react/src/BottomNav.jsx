import React from "react";
import './BottomNav.css';
import { NavLink } from "react-router-dom";
import Dropdown from 'react-dropdown';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function BottomNav () {
  return (
    <nav className="wrapper">
    {/* <nav className="wrapper">
      <div>
        <Dropdown options={AdminOPTIONS.name} onChange={this._onSelect} value={AdminOPTIONS.path} placeholder="Select an option" />;
        <NavLink style={{color: "gray", textDecoration: "none", width: "33%", float: "left"}} to="#">마이페이지</NavLink>
      </div>
      <div>
        <NavLink style={{color: "gray", textDecoration: "none", width: "33%", float: "left"}} to="#">음식만들기</NavLink>
      </div>
      <div>
        <NavLink style={{color: "gray", textDecoration: "none", width: "33%", float: "left"}} to="#">관리자페이지</NavLink>
      </div>
    </nav> */}
      <Navbar variant="dark" bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Collapse id="navbar-dark-example">
            <Nav>
              <NavDropdown as="ButtonGroup" key="up"id="dropdown-button-drop-up nav-dropdown-dark-example" drop="up" variant="secondary" title="마이페이지" menuVariant="dark">
                <NavDropdown.Item href="/Ingredients/Account_Management">계정 관리</NavDropdown.Item>
                <NavDropdown.Item href="/Ingredients/Personal_Fridge">나의 냉장고</NavDropdown.Item>
                <NavDropdown.Item href="/Ingredients/Personal_Cookware">나의 조리기구</NavDropdown.Item>
                <NavDropdown.Item href="/Ingredients/Cooking_Basket">요리 장바구니</NavDropdown.Item>

              </NavDropdown>
            </Nav>
            <Nav>
              <NavDropdown as="ButtonGroup" key="up"id="dropdown-button-drop-up nav-dropdown-dark-example" drop="up" variant="secondary" title="음식만들기" menuVariant="dark">
                <NavDropdown.Item href="/MakingFood/Todays_Recipes">오늘의 레시피</NavDropdown.Item>
                <NavDropdown.Item href="/MakingFood/Best_Recipes">베스트 레시피</NavDropdown.Item>
                <NavDropdown.Item href="/MakingFood/All_Recipes">전체 레시피</NavDropdown.Item>
                <NavDropdown.Item href="/MakingFood/Recipes_Registration">레시피 등록</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <NavDropdown as="ButtonGroup" key="up"id="dropdown-button-drop-up nav-dropdown-dark-example" drop="up" variant="secondary" title="관리자페이지" menuVariant="dark">
                <NavDropdown.Item href="/Admin/Admin_Page">관리자 페이지</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
};

export default BottomNav;