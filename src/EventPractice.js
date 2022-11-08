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
import React, { Component } from 'react';

class EventPractice extends Component {
  render() {
    return (
      <>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          onChange={(e) => {
            console.log(e);
          }}
        />
      </>
    );
  }
}

export default EventPractice;
