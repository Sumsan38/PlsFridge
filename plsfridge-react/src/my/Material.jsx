import React, { Component } from 'react';

class Material extends Component {
    render (){
        let value = 1;
        return (
            <div>
                내 재료 리스트 입니다.
                {
                    1 + 1 === 2 ? <div>true</div> : <div>false</div>
                }
                    <div>
                    {
                        (function () {
                            if(value === 1) return (<div>value 값은 {value}입니다</div>);
                            if(value === 2) return (<div>value 값은 2입니다</div>);
                            }
                        )()
                    }
                    </div>
            </div>
        );
    }
}

export default Material;