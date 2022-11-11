//라이프사이클 메서드의 이해
// 총 9가지의 라이프사이클 메서드가 존재
// Will 접두사 붙은 메서드: 어떤 작업을 작동하기 전에 실행
// Did 접두사 붙은 메서드: 어떤 작업을 작동한 후에 실행
// 위 메서드들은 컴포넌트 클래스에서 덮어 써 선언함으로써 사용

// 라이프사이클은 마운트/업데이트/언마운트 카테고리로 나뉨
// 마운트: DOM 생성되고 웹 브라우저 상에 나타나는 것
// ㄴ 호출하는 메서드는 다음과 같음
//  ㄴ 컴포넌트 만들기 > constructor > getDerivedStateFromProps > render > componentDidMount
// constructor: 컴포넌트를 새로 만들 때마다 호출되는 클래스 생성자 메서드
// getDerivedStateFromProps: props에 있는 값을 state에 넣을 때 사용하는 메서드
// render: 작업자가 준비한 UI를 렌더링하는 메서드
// componentDidMount: 컴포넌트가 웹 브라우저 상에 나타난 후 호출하는 메서드

// 업데이트: 