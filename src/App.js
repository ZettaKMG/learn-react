// ============================== chapter 2 시작 ==============================

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div>
//       <h1>리액트 안녕!</h1>
//       <h2>잘 작동하니?</h2>
//     </div>
//   );
// }

// export default App;

// div 요소 사용하고 싶지 않을 때, Fragment 기능 사용 가능(리액트 v16 이상부터)
// import React, { Fragment } from 'react';

// function App() {
//   return (
//     <Fragment>
//       <h1>리액트 안녕!</h1>
//       <h2>잘 작동하니?</h2>
//     </Fragment>
//   );
// }

// export default App;

// Fragment를 다음과 같은 형태로 간소화
// import React, { Fragment } from 'react';

// function App() {
//   return (
//     <Fragment>
//       <h1>리액트 안녕!</h1>
//       <h2>잘 작동하니?</h2>
//     </Fragment>
//   );
// }

// export default App;

// 자바스크립트 값을 JSX에서 렌더링 하기
// import React from 'react';

// function App() {
//   const name = 'react';
//   return (
//     <>
//       <h1>{name} 안녕!</h1>
//       <h2>잘 작동하니?</h2>
//     </>
//   );
// }

// export default App;

// if 문 대신 조건부 연산자 사용
// import React from 'react';

// function App() {
//   const name = '리액트';
//   return (
//     <>
//       {name === '리액트1' ? (
//         <h1>리액트입니다.</h1>
//       ) : (
//         <h2>리액트가 아닙니다.</h2>
//       )}
//     </>
//   );
// }

// export default App;

// AND 연산자(&&) 사용한 조건부 렌더링
// 삼항 연산자를 사용한 경우
// import React from 'react';

// function App() {
//   const name = 'react';
//   return (
//     <>
//       {name === 'react' ? <h1>리액트입니다.</h1> : null}
//     </>
//   );
// }

// export default App;

// && 연산자를 사용한 경우
// import React from 'react';

// function App() {
//   const name = 'react';
//   return <>{name === 'react' && <h1>리액트입니다.</h1>}</>;
// }

// export default App;

// undefined를 렌더링하지 않기(에러 발생)
// import React from 'react';
// import './App.css';

// function App() {
//   const name = undefined;
//   return name;
// }

// export default App;

// undefined를 렌더링하지 않기(OR(||) 연산자로 오류 방지)
// import React from 'react';
// import './App.css';

// function App() {
//   const name = undefined;
//   return name || '값이 undefined 입니다.';
// }

// export default App;

// JSX 내부에서 렌더링 하는 것은 ok
// import React from 'react';
// import './App.css';

// function App() {
//   const name = undefined;
//   return <>{name}</>;
// }

// export default App;

// 인라인 스타일링(style 객체를 미리 선언 후, div style 값으로 지정)
// import React from 'react';

// function App() {
//   const name = 'react';
//   const style = {
//     // background-color -> backgroundColor 형태로 대체(camelCase법으로 작성)
//     backgroundColor : 'black',
//     color : 'aqua',
//     fontSize : '36px', // font-size -> fontSize 로 대체
//     fontWeight : 'bold', // font-weight -> fontWeight 로 대체
//     padding : 16 // 단위 생략시 px 단위
//   };
//   return <div style={style}>{name}</div>;
// }

// export default App;

// 인라인 스타일링(미리 선언 없이 바로 style 값 지정)
// import React from 'react';

// function App() {
//   const name = 'react';

//   return (
//     <div
//       style={{
//         // background-color -> backgroundColor 형태로 대체(camelCase법으로 작성)
//         backgroundColor : 'black',
//         color : 'aqua',
//         fontSize : '36px', // font-size -> fontSize 로 대체
//         fontWeight : 'bold', // font-weight -> fontWeight 로 대체
//         padding : 16 // 단위 생략시 px 단위
//       }}
//     >
//       {name}
//     </div>
//   );
// }

// export default App;

// class -> className
// import React from 'react';
// import './App.css';

// function App() {
//   const name = 'react';
//   return <div className="react">{name}</div>;
// }

// export default App;

// 반드시 닫아주어야 하는 태그(html에서는 문제 없으나, JSX에서는 오류 발생)
// import React from 'react';
// import './App.css';

// function App() {
//   const name = 'react';
//   return (
//     <>
//       <div className="react">{name}</div>
//       <input>
//     </>
//   );
// }

// export default App;

// input 태그를 닫아야 오류가 발생하지 않음
// import React from 'react';
// import './App.css';

// function App() {
//   const name = 'react';
//   return (
//     <>
//       <div className="react">{name}</div>
//       <input></input>
//       <input /> {/* <- self_closing 태그 */}
//     </>
//   );
// }

// export default App;

// 주석
// import React from 'react';
// import './App.css';

// function App() {
//   const name = 'react';
//   return (
//     <>
//       {/* 주석은 이렇게 작성합니다. */}
//       <div
//         className="react" // 시작 태그를 여러 줄로 작성하게 된다면 여기에 주석을 작성할 수 있습니다.
//       >
//         {name}
//       </div>
//       // 하지만 이런 주석이나
//       /* 이런 주석은 페이지에 그대로 나타나게 됩니다. */
//       <input />
//     </>
//   );
// }

// export default App;

// 들여쓰기가 이상한 코드 작성
// import React from 'react';
// import './App.css';

// function App() {
//   const name = 'react';
//   return (
//     <div>
//       <div className="react">{name}</div>
//       <h1>들여쓰기가 이상한</h1>
//       <h2>코드</h2>
//       <p>입니다.</p>
//     </div>
//   );
// }

// export default App;

// ============================== chapter 2 끝 ==============================

// ============================== chapter 3 시작 ==============================

// 컴포넌트 선언 방식은 함수형 컴포넌트, 클래스형 컴포넌트로 나뉨.
// 함수형 컴포넌트의 예
// import React from 'react';
// import './App.css';

// function App() {
//   const name = '리액트';
//   return <div className="react">{name}</div>;
// }

// export default App;

// 클래스형 컴포넌트의 예
// import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     const name = 'react';
//     return <div className="react">{name}</div>;
//   }
// }

// export default App;

// 모듈 불러오기 코드 작성
// import React from 'react';
// import MyComponent from './MyComponent';

// const App = () => {
//   return <MyComponent />;
// };

// export default App;

// 컴포넌트를 사용할 때, props 값 지정하기
// import React from 'react';
// import MyComponent from './MyComponent';

// const App = () => {
//   return <MyComponent name="React" />;
// };

// export default App;

// defaultProps 설정
// import React from 'react';
// import MyComponent from './MyComponent';

// const App = () => {
//   return <MyComponent />;
// };

// export default App;

// export default App;

// children 보여주기
// import React from 'react';
// import MyComponent from './MyComponent';

// const App = () => {
//   return <MyComponent>리액트</MyComponent>;
// };

// export default App;

// propTypes로 props 검증(콘솔 탭 에러 메세지 출력)
// import React from 'react';
// import MyComponent from './MyComponent';

// const App = () => {
//   return <MyComponent name={3}>리액트</MyComponent>;
// };

// export default App;

// propTypes로 props 검증(에러 수정)
// import React from 'react';
// import MyComponent from './MyComponent';

// const App = () => {
//   return <MyComponent name="React">리액트</MyComponent>;
// };

// export default App;

// 경고 메세지 사라지게 favoriteNumber 값 지정
// import React from 'react';
// import MyComponent from './MyComponent';

// const App = () => {
//   return (
//     <MyComponent name="React" favoriteNumber={1}>
//       리액트
//     </MyComponent>
//   );
// };

// export default App;

// Counter 컴포넌트를 App에서 불러와 렌더링하기
// import React from 'react';
// import Counter from './Counter';

// const App = () => {
//   return <Counter />;
// };

// export default App;

// Say 컴포넌트를 App에서 렌더링
// import React from 'react';
// import Say from './Say';

// const App = () => {
//   return <Say />;
// };

// export default App;

// EventPractice 렌더링(4.2.1.2)
import React from 'react';
import EventPractice from './EventPractice';

const App = () => {
  return <EventPractice />;
};

export default App;
