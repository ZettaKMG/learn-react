// import React from 'react';

// const MyComponent = () => {
//   return <div>나의 새롭고 멋진 컴포넌트</div>;
// };

// export default MyComponent;

// JSX 내부에서 props 렌더링
// import React from 'react';

// const MyComponent = (props) => {
//   return <div>안녕하세요, 제 이름은 {props.name}입니다.</div>;
// };

// export default MyComponent;

// defaultProps 설정
// import React from 'react';

// const MyComponent = (props) => {
//   return <div>안녕하세요, 제 이름은 {props.name}입니다.</div>;
// };

// MyComponent.defaultProps = {
//   name: '기본 이름'
// };

// export default MyComponent;

// children 보여주기
// import React from 'react';

// const MyComponent = (props) => {
//   return (
//     <div>
//       안녕하세요, 제 이름은 {props.name}입니다. <br />
//       children 값은 {props.children}
//       입니다.
//     </div>
//   );
// };

// MyComponent.defaultProps = {
//   name: '기본 이름'
// };

// export default MyComponent;

// 비구조화 할당 문법
import React from 'react';

const MyComponent = (props) => {
  const { name, children } = props;
  return (
    <div>
      안녕하세요, 제 이름은 {props.name}입니다. <br />
      children 값은 {props.children}
      입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: '기본 이름',
};

export default MyComponent;
