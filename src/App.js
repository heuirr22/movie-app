import React from 'react';

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };

  componentDidMount() {
    // 5초 기다렸다가 isLoading을 false로 변경
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 5000);
  }

  render() {
    // const로 this.state 빼기
    const {isLoading} = this.state;
    // js 삼항연산자
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;
