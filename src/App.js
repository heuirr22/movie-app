import React from 'react';

// 클래스 컴포넌트 : class (컴포넌트이름) extends React.Component {}
class App extends React.Component{
  // 변화할 수 있는 데이터 : state
  state = {
    count: 0
  };
  // 자바스크립트
  // state의 데이터를 바꾸고 싶다면, setStat : setState는 호출할 때, react는 동시에 render한다.
  Add = () => {
    // state를 직접적으로 건들이면, 향후 성능상 좋지 못하다.
    this.setState({ count : this.state.count + 1 });
  };
  Minus = () => {
    // state를 건들이지 않는 가장 현대적인 setState 사용법 (천장에 두고 외우기)
    this.setState(current =>({ count : current.count -1 }));
  };

  // 첫 컴포넌트가 완료 되었을 때 동작
  componentDidMount() {
    console.log("Component rendered!");
  }
  // setState 등으로 컴포넌트가 업데이트 완료했을 때 동작
  componentDidUpdate() {
    console.log("I just updated!");
  }
  // 컴포넌트가 언마운트(DIE) 될 때 동작 (현재 코드에서는 볼 수 없음)
  componentWillUnmount() {
    console.log("Goodbye!");
  }

  render() {
    // 렌더링 될 때 동작
    console.log("I am rendering!");
    return(
      <div>
        <h1>The number is: {this.state.count} </h1>
        <button onClick = {this.Add} >Add</button>
        <button onClick = {this.Minus}>Minus</button>
      </div>
    );
  }
}

export default App;
