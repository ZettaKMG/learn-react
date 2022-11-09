// 리액트 컴포넌트에서 state 사용 순서
// ValidationSample 컴포넌트 만들기 > input에 ref 달기 > 버튼을 누를 때마다 input에 포커스 주기
import React, {Component} from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
    state = {
        password: '',
        clicked: false,
        validated: false
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        });
        this.input.focus(); // 버튼에서 onClick 이벤트 발생시 input에 포커스를 주도록 함
    }

    render() {
        return (
            <>
                <input
                    ref={(ref) => this.input=ref} // 콜백 함수를 사용하여 ref 달아주기
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                />
                <button onClick={this.handleButtonClick}>검증하기</button>    
            </>
        );
    }
}

export default ValidationSample;