// 6장 컴포넌트 반복 시작
// import React from 'react';

// const IterationSample = () => {
//     return (
//         <ul>
//             <li>눈사람</li>
//             <li>얼음</li>
//             <li>눈</li>
//             <li>바람</li>
//         </ul>
//     );
// };

// export default IterationSample;

// 데이터 배열을 컴포넌트 배열로 변환하기
// 컴포넌트 수정하기
// import React from 'react';

// const IterationSample = () => {
//    const names = ['눈사람', '얼음', '눈', '바람'];
//    const nameList = names.map(name => <li>{name}</li>);
//    return <ul>{nameList}</ul>;
// };

// export default IterationSample;

// key 설정
// map 함수의 인자로 전달되는 함수 내부에서 컴포넌트 props를 설정하듯이 설정하면 됨
// key 값은 언제나 유일해야 함(데이터의 고유값을 key값으로 설정)
// ㄴ 고유값이 없을시에는 map 함수에 전달되는 콜백 함수 인수인 index 값 이용
// 예제 컴포넌트 수정
import React from 'react';

const IterationSample = () => {
   const names = ['눈사람', '얼음', '눈', '바람'];
   const nameList = names.map((name, index) => <li key={index}>{name}</li>);
   return <ul>{nameList}</ul>;
};

export default IterationSample;