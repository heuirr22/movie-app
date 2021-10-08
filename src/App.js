import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };

  // 아래처럼 하면 예쁘지 않으므로, ES6 사용 권장
  // getMovies = async () => {
  //  const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  //  console.log(movies.data.data.movies);
  //};

  getMovies = async () => {
    const {
      data : {
        data : { movies }
      }
    } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"); //rating 순으로 정렬
    this.setState({movies, isLoading: false});
  };
  
  // 컴포넌트가 마운트 되면 아래 함수 
  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading
          ? "Loading..."
          : movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
              />
              ))}
              </div>
            );
  }
}

export default App;
