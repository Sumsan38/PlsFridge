import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';
import './Main_top.css';
import Home from './Home';
/* 이거 나중에 import도 하나씩 말고 하는 법 있지 않을까? */
import MyPage from './my/MyPage';
import Material from './my/Material';
import TodayReceipt from './receipt/TodayReceipt';
import RandomReceipt from './receipt/RandomReceipt';

class Main_top extends Component {
    render() {
        return (
            <div className ="top-body">
            {/* 6은 Routers/element, 5.2.0은 exact/Switch/component */}
                <Route exact path="/" component ={Home}/>
                <Switch>
                    /* 이거 나중에 import도 하나씩 말고 하는 법 있지 않을까? */
                    <Route path = "/my/MyPage" component = {MyPage} />
                    <Route path = "/my/Material" component = {Material} />
                    <Route path = "/receipt/TodayReceipt" component = {TodayReceipt} />
                    <Route path = "/receipt/RandomReceipt" component = {RandomReceipt} />
                </Switch>
            </div>
        );
    }
}

export default Main_top;