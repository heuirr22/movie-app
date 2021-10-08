import React from 'react';
import PropTypes from 'prop-types';

// 클래스 컴포넌트 : class (컴포넌트이름) extends React.Component {}
class App extends React.Component{
  // 변화할 수 있는 데이터 : state
  state = {
    count: 0
  };
  // 자바스크립트
  // state의 데이터를 바꾸고 싶다면, setStat : setState는 호출할 때, react는 동시에 render한다.
  Add = () => {
    console.log("Add");
    // state를 직접적으로 건들이면, 향후 성능상 좋지 못하다.
    this.setState({ count : this.state.count + 1 });
  };
  Minus = () => {
    console.log("Minus");
    // state를 건들이지 않는 가장 현대적인 setState 사용법
    this.setState(current =>({ count : current.count -1 }));
  };

  render() {
    return(
      <div>
        <h1>The number is: {this.state.count} </h1>
        <button onClick = {this.Add} >Add</button>
        <button onClick = {this.Minus}>Minus</button>
      </div>
    )
  };
}

export default App;
