import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './Nav.css';

class Menu extends Component {
    //변수 생성
  constructor() {
    super();
    this.state = {
      isIngredientsHovered: false,
      isMakingFoodHovered: false,
      isAdminHovered: false,
      link: '',
    };
  }

  render() {
      //초기화
    const { isIngredientsHovered, isMakingFoodHovered, isAdminHovered } = this.state;

    return (
      <div className="menu">
          {/* 마우스 위치에 따라 true, false값 반환 */}
        <div
          className="category wrapBox"
          onMouseEnter={() => this.setState({ isIngredientsHovered: !isIngredientsHovered })}
          onMouseLeave={() => this.setState({ isIngredientsHovered: !isIngredientsHovered })}
        >
          <Link to="#">마이페이지</Link>
          {/* 밑에서 만든 링크, 이름으로 하위메뉴 생성 */}
          {isIngredientsHovered && (
            <ul className="shopCloseBox">
              {IngredientsList.map((list, index) => {
                return (
                  <li className="shopClose" key={index}>
                    <Link to={list.link}>{list.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <div
          className="category wrapBox"
          onMouseEnter={() =>
            this.setState({ isMakingFoodHovered: !isMakingFoodHovered })
          }
          onMouseLeave={() =>
            this.setState({ isMakingFoodHovered: !isMakingFoodHovered })
          }
        >
          <Link to="#">음식만들기</Link>
          {isMakingFoodHovered && (
            <ul className="aboutCloseBox">
              {MakingFoodList.map((list, index) => {
                return (
                  <li className="shopClose" key={index}>
                    <Link to={list.link}>{list.text}</Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <div
          className="category wrapBox"
          onMouseEnter={() =>
            this.setState({ isAdminHovered: !isAdminHovered })
          }
          onMouseLeave={() =>
            this.setState({ isAdminHovered: !isAdminHovered })
          }
        >
          <Link to="#">관리자페이지</Link>
          {isAdminHovered && (
            <ul className="aboutCloseBox">
              {AdminList.map((list, index) => {
                return (
                  <li className="shopClose" key={index}>
                    <Link to={list.link}>{list.text}</Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(Menu);

const baseIngredientsUrl = '/Ingredients/';
const baseMakingFoodUrl = '/MakingFood/';
const baseAdminUrl = '/Admin/';

const IngredientsList = [
  {
    link: `${baseIngredientsUrl}Account_Management`,
    text: '계정 관리',
  },
  {
    link: `${baseIngredientsUrl}Personal_Fridge`,
    text: '나의 냉장고',
  },
  {
    link: `${baseIngredientsUrl}Personal_Cookware`,
    text: '나의 조리기구',
  },
  {
    link: `${baseIngredientsUrl}Cooking_Basket`,
    text: '요리 장바구니',
  },
];

const MakingFoodList = [
  {
    link: `${baseMakingFoodUrl}Todays_Recipes`,
    text: '오늘의 레시피',
  },
  {
    link: `${baseMakingFoodUrl}Best_Recipes`,
    text: '베스트 레시피',
  },
  {
    link: `${baseMakingFoodUrl}All_Recipes`,
    text: '전체 레시피',
  },
  {
    link: `${baseMakingFoodUrl}Recipes_Registration`,
    text: '레시피 등록',
  },
];

const AdminList = [
    {
      link: `${baseAdminUrl}Admin_Page`,
      text: '관리자 페이지',
    },
  ];