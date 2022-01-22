import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './Main_bottom.css';

class Main_bottom extends Component {
    render() {
        return (
        <nav className = "bottom-body">
            <div>
                <Link to = "/my/MyPage">마이페이지</Link>
            </div>
            <div>
                <Link to = "/receipt/TodayReceipt">오늘의랜덤요리</Link>
            </div>
        </nav>
        );
    }
}

export default Main_bottom;