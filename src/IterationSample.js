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
import React from 'react';

const IterationSample = () => {
   const names = ['눈사람', '얼음', '눈', '바람'];
   const nameList = names.map(name => <li>{name}</li>);
   return <ul>{nameList}</ul>;
};

export default IterationSample;