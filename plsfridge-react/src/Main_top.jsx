import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';
import './Main_top.css';
import Home from './Home';
import MyPage from './my/MyPage';
import TodayReceipt from './receipt/TodayReceipt';

class Main_top extends Component {
    render() {
        return (
            <div className ="top-body">
            {/* 6은 Routers/element, 5.2.0은 exact/Switch/component */}
                <Switch>
                    <Route exact path="/" component ={Home}/>
                    <Route path = "/my/MyPage" component = {MyPage} />
                    <Route path = "/receipt/TodayReceipt" component = {TodayReceipt} />
                </Switch>
            </div>
        );
    }
}

export default Main_top;