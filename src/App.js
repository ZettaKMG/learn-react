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
import React from 'react';

function App() {
  const name = 'react';
  return (
    <>
      <h1>{name} 안녕!</h1>
      <h2>잘 작동하니?</h2>
    </>
  );
}

export default App;