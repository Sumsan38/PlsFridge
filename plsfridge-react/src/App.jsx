import React, { Component } from 'react';
import Main_top from './com/HS/main/Main_top'
import Main_bottom from './com/HS/main/Main_bottom'

class App extends Component {
    render() {
        return(
            <div>
                <Main_top/ >
                <Main_bottom />
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