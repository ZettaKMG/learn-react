// useState 사용하기
// import React, { useState } from 'react';

// const Say = () => {
//   const [message, setMessage] = useState('');
//   const onClickEnter = () => setMessage('안녕하세요!');
//   const onClickLeave = () => setMessage('안녕히 가세요!');

//   return (
//     <>
//       <button onClick={onClickEnter}>입장</button>
//       <button onClick={onClickLeave}>퇴장</button>
//       <h1>{message}</h1>
//     </>
//   );
// };

// export default Say;

// 한 컴포넌트에서 useState 여러 번 사용하기
// import React, { useState } from 'react';

// const Say = () => {
//   const [message, setMessage] = useState('');
//   const onClickEnter = () => setMessage('안녕하세요!');
//   const onClickLeave = () => setMessage('안녕히 가세요!');

//   const [color, setColor] = useState('black');

//   return (
//     <>
//       <button onClick={onClickEnter}>입장</button>
//       <button onClick={onClickLeave}>퇴장</button>
//       <h1 style={{ color }}>{message}</h1>
//       <button style={{ color: 'red' }} onClick={() => setColor('red')}>
//         빨간색
//       </button>
//       <button style={{ color: 'green' }} onClick={() => setColor('green')}>
//         초록색
//       </button>
//       <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
//         파란색
//       </button>
//     </>
//   );
// };

// export default Say;

// ========================= 3장 끝 =========================

// ========================= 4장 시작 =========================
// 이벤트 사용시 주의사항
// 1. 이벤트 이름은 카멜 표기법으로 작성(ex. onclick(html) > onClick(리액트), onkeyup(html) > onKeyUp(리액트))
// 2. 이벤트에 실행할 js코드를 전달하는 것이 아니라, 함수 형태 값을 전달
// 3. DOM 요소에만 이벤트 설정 가능
// import React, { useState } from 'react';

// const Say = () => {
//   const [message, setMessage] = useState('');
//   const onClickEnter = () => setMessage('안녕하세요!');
//   const onClickLeave = () => setMessage('안녕히 가세요!');

//   const [color, setColor] = useState('black');

//   return (
//     <>
//       <button onClick={onClickEnter}>입장</button>
//       <button onClick={onClickLeave}>퇴장</button>
//       <h1 style={{ color }}>{message}</h1>
//       <button style={{ color: 'red' }} onClick={() => setColor('red')}>
//         빨간색
//       </button>
//       <button style={{ color: 'green' }} onClick={() => setColor('green')}>
//         초록색
//       </button>
//       <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
//         파란색
//       </button>
//     </>
//   );
// };

// export default Say;

// 예제로 이벤트 핸들링 익히기
