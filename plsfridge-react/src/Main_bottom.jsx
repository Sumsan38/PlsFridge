import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './Main_bottom.css';

class Main_bottom extends Component {

    constructor() {
        super();
        this.state = {
            isMyHovered: false,
            isCookHovered: false,
            link: '',
        };
    }
    /* onMouseEnter - 마우스가 요소에 올라왔을 때 */
    /* onMouseLeave - 마우스가 요소에서 나갔을 때 */
    /* onClick - 마우스 클릭 이벤트 */

    render() {
        let { isMyHovered, isCookHovered } = this.state; // this는 constructor

        return (
        <div className = "bottom-body">
                <div
                    onMouseEnter = {() => this.setState({ isMyHovered: !isMyHovered }) }
                    onMouseLeave = {() => this.setState({ isMyHovered: !isMyHovered }) }
                >
                    <Link to = "/">마이 메뉴</Link>
                    {isMyHovered && (
                        <ul>
                        {
                            myList.map((list, index) =>
                                {
                                    return (
                                        <li key={index}>
                                            <Link to={list.link}> {list.text} </Link>
                                        </li>
                                    );
                                }
                            )
                        }
                        </ul>
                    )}
                </div>
                <div
                     onMouseEnter = {() => this.setState({ isCookHovered: !isCookHovered }) }
                     onMouseLeave = {() => this.setState({ isCookHovered: !isCookHovered }) }
                >
                    <Link to = "/">요리 하기 메뉴</Link>
                    {isCookHovered &&
                        <ul>
                        {
                            cookList.map(function (list, index)
                                {
                                    return (
                                        <li key={index}>
                                            <Link to={list.link}> {list.text} </Link>
                                        </li>
                                    );
                                }
                            )
                        }
                        </ul>
                    }
                </div>
        </div>
        );
    }
}
export default Main_bottom;

const baseMyUrl = '/My/';
const baseCookUrl = '/receipt/';
/* 배열 선언 방법 [{}, {}] */
const myList = [
    {
        link: `${baseMyUrl}MyPage`, // 1번 앞에 있는 작은 따옴표다
        text: '마이페이지'
    },
    {
        link: `${baseMyUrl}Material`,
        text: '재료'
    }
]
const cookList = [
    {
        link: `${baseCookUrl}TodayReceipt`,
        text: '오늘의 요리'
    },
    {
        link: `${baseCookUrl}RandomReceipt`,
        text: '랜덤요리'
    }
]