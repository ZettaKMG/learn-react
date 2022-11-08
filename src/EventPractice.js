// 예제로 이벤트 핸들링 익히기
// 순서 : 컴포넌트 생성 및 불러오기 > onChange 이벤트 핸들링하기 > 임의 메서드 만들기 > input 여러 개 다루기 > onKeyPress 이벤트 핸들링하기
// 컴포넌트 생성 및 불러오기
// import React, { Component } from 'react';

// class EventPractice extends Component {
//   render() {
//     return (
//       <>
//         <h1>이벤트 연습</h1>
//       </>
//     );
//   }
// }

// export default EventPractice;

// onChange 이벤트 핸들링하기
// onChange 이벤트 설정
// import React, { Component } from 'react';

// class EventPractice extends Component {
//   render() {
//     return (
//       <>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력해 보세요"
//           onChange={(e) => {
//             console.log(e);
//           }}
//         />
//       </>
//     );
//   }
// }

// export default EventPractice;

// 콘솔에 기록된 e 객체는 SyntheticEvent로 웹 브라우저의 네이티브 이벤트를 감싸는 객체(순수 js에서 html 이벤트를 다룰 때와 똑같이 사용하면 됨)
// 하지만, SyntheticEvent는 네이티브 이벤트와 달리 이벤트가 끝난 뒤엔 초기화 되어버리므로 정보 참조는 불가함
// 비동기적으로 이벤트 참조를 해야 할 경우 : e.persist() 함수 호출 필요
// onChange 이벤트 발생시 앞으로 변할 인풋 값 입력
// import React, { Component } from 'react';

// class EventPractice extends Component {
//   render() {
//     return (
//       <>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력해 보세요"
//           onChange={(e) => {
//             console.log(e.target.value);
//           }}
//         />
//       </>
//     );
//   }
// }

// export default EventPractice;

// state에 input 값 담기
// import React, { Component } from 'react';

// class EventPractice extends Component {
//   state = {
//     message: ''
//   }

//   render() {
//     return (
//       <>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력해 보세요"
//           value={this.state.message}
//           onChange={(e) => {
//             this.setState({
//               message: e.target.value
//             })
//           }}
//         />
//       </>
//     );
//   }
// }

// export default EventPractice;

// 버튼을 누를 때 comment 값을 공백으로 설정
// import React, { Component } from 'react';

// class EventPractice extends Component {
//   state = {
//     message: ''
//   }

//   render() {
//     return (
//       <>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력해 보세요"
//           value={this.state.message}
//           onChange={(e) => {
//             this.setState({
//               message: e.target.value
//             })
//           }}
//         />
//         <button onClick={
//             () => {
//                 alert(this.state.message);
//                 this.setState({
//                     message: ''
//                 });
//             }
//         }>확인</button>
//       </>
//     );
//   }
// }

// export default EventPractice;

// 임의 메서드 만들기
// 앞서 onChange와 onClick에 전달한 함수를 따로 빼내서 컴포넌트 임의 메서드 만들기
// 기본 방식
// import React, { Component } from 'react';

// class EventPractice extends Component {
//   state = {
//     message: ''
//   }

//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleChange(e) {
//     this.setState({
//         message: e.target.value
//     });
//   }

//   handleClick() {
//     alert(this.state.message);
//     this.setState({
//         message: ''
//     });
//   }

//   render() {
//     return (
//       <>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력해 보세요"
//           value={this.state.message}
//           onChange={this.handleChange}
//         />
//         <button onClick={this.handleClick}>확인</button>
//       </>
//     );
//   }
// }

// export default EventPractice;

// Property Initializer Syntax를 사용한 메서드 작성
// 바벨의 transform-class-properties 문법 사용
// import React, { Component } from 'react';

// class EventPractice extends Component {
//   state = {
//     message: ''
//   }

//   handleChange = (e) => {
//     this.setState({
//         message: e.target.value
//     });
//   }

//   handleClick = () => {
//     alert(this.state.message);
//     this.setState({
//         message: ''
//     });
//   }

//   render() {
//     return (
//       <>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력해 보세요"
//           value={this.state.message}
//           onChange={this.handleChange}
//         />
//         <button onClick={this.handleClick}>확인</button>
//       </>
//     );
//   }
// }

// export default EventPractice;

// input 여러 개 다루기
// 메서드를 여러 개 만든다? > 가능은 하나 번거로움
// event 객체를 활용하면 더 쉽게 처리가능(e.target.name 값 사용)
// import React, { Component } from 'react';

// class EventPractice extends Component {
//   state = {
//     username: '',
//     message: ''
//   }

//   handleChange = (e) => {
//     this.setState({
//         [e.target.name]: e.target.value // 핵심 코드
//     });
//   }

//   handleClick = () => {
//     alert(this.state.username + ': ' + this.state.message);
//     this.setState({
//         username: '',
//         message: ''
//     });
//   }

//   render() {
//     return (
//       <>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="username"
//           placeholder="사용자명"
//           value={this.state.username}
//           onChange={this.handleChange}
//         />
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력해 보세요"
//           value={this.state.message}
//           onChange={this.handleChange}
//         />
//         <button onClick={this.handleClick}>확인</button>
//       </>
//     );
//   }
// }

// export default EventPractice;

// onKeyPress 이벤트 핸들링
// 두 번째 텍스트 인풋에 텍스트 입력 후 enter키 누르면 handleClick 메서드 실행되게끔 하기
import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    username: '',
    message: ''
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value // 핵심 코드
    });
  }

  handleClick = () => {
    alert(this.state.username + ': ' + this.state.message);
    this.setState({
        username: '',
        message: ''
    });
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
        this.handleClick();
    }
  }

  render() {
    return (
      <>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>
      </>
    );
  }
}

export default EventPractice;