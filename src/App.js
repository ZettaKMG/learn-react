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
//       {name === 'react' ? (
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
import React from 'react';

function App() {
  const name = 'react';
  return <>{name === 'react' && <h1>리액트입니다.</h1>}</>;
}

export default App;