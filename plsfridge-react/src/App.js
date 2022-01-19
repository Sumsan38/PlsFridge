import React, { Component } from 'react';

class App extends Component {
    // state란, 컴포넌트 안에서 새로운 데이터를 만들어낼 때 사용한다
    state = {
        hello: 'Hello app js!',
        count : 0
    };

    handleChange = () => {
        this.setState({
            hello: 'bye app js!'
        });
    };
    countUp = () => {
        this.setState({
            count: this.state.count + 2
        });
    };

    render() {
        return (
        <div className = "App">
            <h3>index Props</h3>
            <div className = "props">
                {/* Props가 들어가는 부분 */}
                <span>{this.props.message}</span>
            </div>

            <h3>State</h3>
            <div className = "state">
                {/* State가 들어가는 부분 */}
                <div>{this.state.hello}</div>
                <button onClick={this.handleChange}>Click Me!</button>
                <div>{this.state.count}</div>
                <button onClick={this.countUp}>count up!</button>
            </div>

            <h3>App Props</h3>
            {/* App.js에 다른 컴포넌트를 상속시켜서 Porps를 변경 해보는 예제 */}
            <div className = "inside-app-props">
            <InsideApp
                count = {this.state.count}
                countUpInsideApp={this.countUp}
            />
            </div>
        </div>
        );
    }
}

class InsideApp extends Component {
    render() {
        return (
            <div>
            <div>{this.props.count}</div>
            <button onClick = {this.props.countUpInsideApp}> click Me !</button>
            </div>
        );
    }
}

export default App;


/*
props (“properties”의 줄임말) 와 state 는 일반 JavaScript 객체입니다.
두 객체 모두 렌더링 결과물에 영향을 주는 정보를 갖고 있는데, 한 가지 중요한 방식에서 차이가 있습니다.
props는 (함수 매개변수처럼) 컴포넌트에 전달되는 반면 state는 (함수 내에 선언된 변수처럼) 컴포넌트 안에서 관리됩니다.
*/