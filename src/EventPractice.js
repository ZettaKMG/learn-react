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
import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    message: '',
  };

  render() {
    return (
      <>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={(e) => {
            this.setState({
              message: e.target.value,
            });
          }}
        />
      </>
    );
  }
}

export default EventPractice;
