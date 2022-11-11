//라이프사이클 메서드의 이해
// 총 9가지의 라이프사이클 메서드가 존재.
// Will 접두사 붙은 메서드: 어떤 작업을 작동하기 전에 실행.
// Did 접두사 붙은 메서드: 어떤 작업을 작동한 후에 실행.
// 위 메서드들은 컴포넌트 클래스에서 덮어 써 선언함으로써 사용.

// 라이프사이클은 마운트/업데이트/언마운트 카테고리로 나뉨.
// 마운트: DOM 생성되고 웹 브라우저 상에 나타나는 것.
// ㄴ 호출하는 메서드는 다음과 같음.
//  ㄴ 컴포넌트 만들기 > constructor > getDerivedStateFromProps > render > componentDidMount
// constructor: 컴포넌트를 새로 만들 때마다 호출되는 클래스 생성자 메서드.
// getDerivedStateFromProps: props에 있는 값을 state에 넣을 때 사용하는 메서드.
// render: 작업자가 준비한 UI를 렌더링하는 메서드.
// componentDidMount: 컴포넌트가 웹 브라우저 상에 나타난 후 호출하는 메서드.

// 컴포넌트는 아래 4가지 경우에 업데이트함
// 1)props가 바뀔 때, 2)state가 바뀔 때, 3)부모 컴포넌트가 리렌더링될 때, 4)this.forceUpdate로 강제로 렌더링을 트리거할 때
// 업데이트시 호출하는 메서드
// 업데이트 발생 요인 > getDerivedStateFromProps > shouldComponentUpdate > (true 반환시 render 호출, false 반환시 여기서 작업 취소)
// > render > getSnapshotBeforeUpdate > 웹 브라우저상의 실제 DOM 변화 > componentDidUpdate
// getDerivedStateFromProps: 마운트 과정, 업데이트 시작하기 전에 모두 호출되는 메서드. props 변화에 따라 state 값에도 변화주고 싶을 때 사용.
// shouldComponentUpdate: 컴포넌트가 리렌더링을 할지 말지 결정하는 메서드. true or false에 따라 작동 여부가 달라짐. 단, 특정 함수에서 this.forceUpdate() 함수 호출했을 때는 이 과정 생략후 바로 render 함수 호출.
// render: 컴포넌트 리렌더링.
// getSnapshotBeforeUpdate: 컴포넌트 변화를 DOM에 반영하기 바로 직전에 호출하는 메서드.
// componentDidUpdate: 컴포넌트 업데이트 작업 끝난 후 호출하는 메서드.

// 언마운트: 컴포넌트를 DOM에서 제거하는 것.(마운트의 반대과정)
// 언마운트하기 > componentWillUnmount
// componentWillUnmount: 컴포넌트가 웹 브라우저 상에서 사라지기 전에 호출하는 메서드.

// 라이프사이클 메서드 살펴보기
// render() 함수: 컴포넌트 모양새를 정의.
// 라이프사이클 메서드 중 유일한 필수 메서드.
// 이 메서드 안에서 this.props와 this.state에 접근.
// div 같은 태그 혹은 따로 선언한 컴포넌트 등의 요소 반환.
// 아무것도 보여주고 싶지 않으면 null값이나 false값을 반환하도록 함.
// *주의사항: 이 메서드 내에서는 이벤트 설정 아닌 곳에서 setState 사용X, 브라우저 DOM 접근X
//           ㄴ DOM 정보 가져오거나 state에 변화를 주려면 componentDidMount에서 처리할 것!

// constructor 메서드: 컴포넌트의 생성자 메서드로 컴포넌트 만들 때 처음으로 실행됨. 초기 state를 정할 수 있음.
// getDerivedStateFromProps 메서드: props로 받아 온 값을 state에 동기화시키는 용도로 사용.
// ㄴ 컴포넌트가 마운트될 때, 업데이트 시 호출됨.
// 예시
// static getDerivedStateFromProps(nextProps, prevState) {
//     if (nextProps.value !== prevState.value) { // 조건에 따라 특정 값 동기화
//         return {value: nextProps.value};
//     }
//     return null; // state를 변경할 필요가 없으면 null 반환
// }

// componentDidMount 메서드
// 컴포넌트를 만들고, 첫 렌더링을 다 마친 후 실행.
// 이 안에서 다른 js 라이브러리 또는 프레임워크 함수 호출 or 이벤트 등록, setTimeout, setInterval, 네트워크 요청 같은 비동기 작업 처리 가능

// shouldComponentUpdate 메서드
// props or state를 변경했을 때, 리렌더링을 시작할지 말지 여부를 지정하는 메서드.
// 반드시 true or false 값 반환.
// 이 메서드를 따로 생성하지 않으면 기본 true값 반환. false값 반환할 경우 업데이트 과정은 여기서 중지됨.
// props -> this.props, state -> this.state로 접근.
// 새로 설정된 props or state -> nextProps or nextState로 접근.

// 