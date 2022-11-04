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
import React from 'react';
import './App.css';

function App() {
  const name = 'react';
  return <div className="react">{name}</div>;
}

export default App;